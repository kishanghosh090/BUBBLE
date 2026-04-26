import type { Socket } from "socket.io";
import { ApiError } from "../utils/ApiError";
import { verifyJWT } from "../utils/jwt";

export const socketAuthMiddleware = (
  socket: Socket,
  next: (err?: Error) => void,
) => {
  const token =
    socket?.handshake?.auth?.token ||
    socket?.handshake?.headers?.cookie
      ?.split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  if (!token) {
    return next(
      new ApiError(
        401,
        "Authentication token is required.Socket connection failed.",
      ),
    );
  }
  const decoded = verifyJWT(token);
  if (!decoded) {
    return next(new ApiError(401, "Authentication token is invalid."));
  }
  let userData = decoded;

  socket.data = userData;
  socket.data.userId = userData.id;
  next();
};
