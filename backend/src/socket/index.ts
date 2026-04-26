import type { Server } from "socket.io";
import { socketAuthMiddleware } from "../middlewares/socket.middleware";
import { SocketEvents } from "../constants/socket";

const initializeSocket = (io: Server) => {
  io.use(socketAuthMiddleware);

  io.on(SocketEvents.CONNECT, (socket) => {
    // register event listeners here
    socket.on(SocketEvents.JOIN_ROOM, (room) => {
      socket.join(room);
      console.log(`user joined room: ${room}`);
    });

    socket.on(SocketEvents.LEAVE_ROOM, (room) => {
      socket.leave(room);
      console.log(`user left room: ${room}`);
    });

    socket.on(SocketEvents.MESSAGE, (data) => {
      console.log("message received:", data);
      // handle incoming message
    });

    socket.on(SocketEvents.TYPING, (room) => {
      socket.to(room).emit(SocketEvents.TYPING, { userId: socket.data.userId });
    });

    socket.on(SocketEvents.STOP_TYPING, (room) => {
      socket
        .to(room)
        .emit(SocketEvents.STOP_TYPING, { userId: socket.data.userId });
    });

    socket.on(SocketEvents.DISCONNECT, () => {
      console.log("user disconnected");
    });
  });
};

export default initializeSocket;
