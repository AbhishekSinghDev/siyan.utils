import "dotenv/config";

import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import { shortUrl } from "./controllers/url.controller";
import urlRouter from "./routes/url.route";

const DISOCRD_TOKEN = process.env.DISOCRD_TOKEN;
const DEV_BASEURL = process.env.DEV_BASEURL;
const PORT = process.env.PORT;

const app = express();

app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

try {
  client.login(DISOCRD_TOKEN);
  console.log("Bot Login Successfull");
} catch (err) {
  console.log("Failed to login !");
}

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.includes("short")) {
    const url = message.content.split(" ")[1];

    const newUrlId = await shortUrl({ url: url });

    message.reply({
      content: `Your Shorten URL: ${DEV_BASEURL}/${newUrlId}`,
    });
  }
});
