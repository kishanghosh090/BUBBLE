import app from "./app";
const PORT = 4006;
import "./providers/redis/index";

app.listen(PORT, () => {
  console.log(`server is listning at PORT ${PORT}`);
});
