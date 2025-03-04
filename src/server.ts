import app from "./app";
import { EnvConfig } from './config/env.config';
import { myLogger } from "./config/logger"
// import { redisClient } from "./config/redis/redis.config"
// import { gracefulShutdownServer } from "./config/shutdown.config"
// import { webSocketConfig } from "./config/socket/socket.config"

const PORT = EnvConfig.PORT || 4000;
// redisClient.on("ready", () => {
//     myLogger().info("Redis is ready to use!")
// })
app.listen(PORT, () => {
    myLogger().info(`Server is running at http://localhost:${PORT}`);
    // webSocketConfig(server)
});
