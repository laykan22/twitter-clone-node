// const server = require('./src/routes/index.js');
// const db = require('./src/config/db');
// const keys = require('./src/config/keys');


// const io = require('socket.io')(server);
// const Port = keys.PORT || 3000;

// io.on('connection', (socket) => {
//   console.log(' A user is connected ');
// } )



// db()
//   .then(() => {
//     console.log('Database connected');
//   })
//   .catch((err) => {
//     console.log(`Database connection failed ${err}`);
//   });

// server.listen(Port, () => {
//   console.log(`Server listening on port ${Port}`);
// });


const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const db = require('./src/config/db');
const keys = require('./src/config/keys');
const app = express(); 
const server = http.createServer(app);
const io = socketIO(server);

const Port = keys.PORT || 3000;

io.on('connection', (socket) => {
  console.log('A user is connected');
});

db()
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log(`Database connection failed ${err}`);
  });

server.listen(Port, () => {
  console.log(`Server listening on port ${Port}`);
});
