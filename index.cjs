const config = require("./config.json");
const mineflayer = require("mineflayer");

const bot = mineflayer.createBot({
  username: config.user,
  host: config.host,
  port: config.port,
  version: config.version,
  auth: config.auth,
});

bot.on("login", () => {
  console.log(
    `[\x1b[32m+\x1b[0m] \x1b[33m'${bot.username}' is now logged in.\x1b[0m`,
  );
});

bot.on("kicked", (reason, loggedIn) => {
  if (!loggedIn)
    console.log(
      `[\x1b[31m-\x1b[0m] ${bot.username} wasn't logged in properly.`,
    );
  console.log(
    `[\x1b[33m!\x1b[0m] ${bot.username} has been kicked! Reason: ${reason.toString()}`,
  );
});

bot.on("error", (error) => {
  console.log(
    `[\x1b[31m-\x1b[0m] ${bot.username} encountered an error: ${error}`,
  );
});

bot.on("end", () => {
  console.log(`[\x1b[31m-\x1b[0m] ${bot.username} Disconnected from server`);
});

bot.on("health", () => {
  setInterval(() => {
    process.stdout.write(
      `Health: \x1b[31m${bot.health.toFixed(0)}\x1b[0m        Hunger: \x1b[38;5;94m${bot.food.toFixed(0)}\x1b[0m\r`,
    );
  }, 1500);
});
