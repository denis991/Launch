const cors = require('cors');
const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.DB_PORT_SOKIT;
const {Server} = require('socket.io')
const http = require('http')

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: true}})

app.use(express.json());
app.use(cors())

const rooms = new Map();


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
    rooms?.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    io.to(roomId).emit('ROOM:SET_USERS', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
    const obj = {
      userName,
      text,
    };
    console.log(obj, 'obj');
    rooms?.get(roomId).get('messages').push(obj);
    io.to(roomId).emit('ROOM:NEW_MESSAGE', obj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if (value.get('users').delete(socket.id)) {
        const users = [...value.get('users').values()];
        io.to(roomId).emit('ROOM:SET_USERS', users);
      }
    });
  });

  console.log('user connected', socket.id);
  console.log('rooms', rooms);
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
