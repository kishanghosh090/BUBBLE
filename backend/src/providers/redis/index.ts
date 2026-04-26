import { Redis } from "ioredis";
import { env } from "../../config/env";

const redisConnection = new Redis({
  host: env.REDIS_HOST,
  port: env.REDIS_PORT,
});
redisConnection.on("connect", () => {
  console.log("Redis connected");
});

redisConnection.on("end", () => {
  console.log("Redis disconnected");
});

redisConnection.on("error", (err) => {
  console.error("Redis error", err);
});
export default redisConnection;
