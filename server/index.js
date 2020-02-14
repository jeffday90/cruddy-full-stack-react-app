const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const index = require('./routes/routes.js');
const db = require('../database/index');

const PORT = 3000;

const app = express();
app.use(index);
app.use(express.static(path.join(__dirname, '../client/dist')));

const server = http.createServer(app);
const io = socketIo(server);
server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));


const updateUserFeed = async (socket) => {
  try {
    // probably can refactor this...
    db.query('SELECT * FROM account', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        socket.emit('fromDB', result.rows);
      }
    });
  } catch (error) {
    console.error(`in the error of the socket on the back end: ${error.code}`);
  }
};

let interval;
io.on('connection', (socket) => {
  console.log('New client connected');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => updateUserFeed(socket), 1000);
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
