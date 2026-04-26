import express from "express";

import { createServer } from "http";
import { Server } from "socket.io";
import initializeSocket from "./socket";

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

initializeSocket(io);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default server;
