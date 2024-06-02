import { Server } from "socket.io";
import express from "express";
import http from "http";

//  Conceptual Steps 
// 1. Create an express app
// 2. attach a http server on it
// 3. attach a socket server on it
// 4. recieve and emit those messages

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});