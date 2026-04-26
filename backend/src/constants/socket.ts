export enum SocketEvents {
  CONNECT = "connection",
  DISCONNECT = "disconnect",
  MESSAGE = "message",
  JOIN_ROOM = "join_room",
  LEAVE_ROOM = "leave_room",
  TYPING = "typing",
  STOP_TYPING = "stop_typing",
  NEW_NOTIFICATION = "new_notification",
}

export enum SocketNamespaces {
  CHAT = "/chat",
  NOTIFICATIONS = "/notifications",
}
