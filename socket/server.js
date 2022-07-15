const cors = require('cors')
require('dotenv').config()
const PORT = process.env.DB_PORT_SOKIT;

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {cors: {origin: true}});

app.use(express.json());

let chatPlayers = []

io.on('connection', (socket) => {

  socket.on('user-connected', (name) => {
    chatPlayers.push({name})
    io.emit('user-connected', chatPlayers)
  })

  socket.on('user-disconnected', (name) => {
    chatPlayers = chatPlayers.filter(chatPlayer => chatPlayer.name !== name)
    io.emit('user-disconnected', chatPlayers)
  })

  socket.on('message', ({name, message}) => {
    io.emit('message', {name, message})
  })
});

server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Сервер запущен!${PORT}`);
});
