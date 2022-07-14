const cors = require('cors');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('dotenv').config()
const PORT = process.env.DB_PORT_SOKIT;

app.use(express.json());
app.use(cors())

const rooms = new Map();
console.log(rooms);
app.get(`/rooms/:id`, (req, res) => {
  const {id: roomId} = req.params;
  const obj = rooms.has(roomId)
    ? {
      users: [...rooms.get(roomId).get('users').values()],
      messages: [...rooms.get(roomId).get('messages').values()],
    }
    : {users: [], messages: []};
  res.json(obj);
});
//создаёь новую комнату
app.post(`/rooms`, (req, res) => {
  const {roomId, userName} = req.body;
  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ['users', new Map()],
        ['messages', []],
      ]),
    );
  }
  res.send();
});

io.on('connection', (socket) => {
  socket.on('ROOM:JOIN', ({roomId, userName}) => {
    socket.join(roomId);
    console.log('roomId',roomId);
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
    const obj = {
      userName,
      text,
    };
    console.log(obj,'obj');
    rooms.get(roomId).get('messages').push(obj);
    socket.to(roomId).broadcast.emit('ROOM:NEW_MESSAGE', obj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        socket.to(roomId).broadcast.emit('ROOM:SET_USERS', users);
      }
    });
  });

  console.log('user connected', socket.id);
  console.log('rooms' ,rooms);
  // console.log('socket',socket );
  // console.log('request info',socket.to);
});

server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Сервер запущен!${PORT}`);
});
// "proxy": "http://localhost:9999",
