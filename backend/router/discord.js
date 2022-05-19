import { Client } from "discord.js";
import express from "express";
import { logger, boldify } from "../functions/index.js";
import "dotenv/config";

const router = express.Router();
const { DISCORD_BOT_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID } = process.env;
const client = new Client({ intents: 32767, partials: ["GUILD_MEMBER"] });

router.get("/", async (req, res) => {
  const guild = await client.guilds.fetch(DISCORD_GUILD_ID);
  const member = await guild.members.fetch(DISCORD_CLIENT_ID);
  const Presence = member.presence;

  logger("info", `Fetched information for ${boldify(`${member.user.tag}`)}`);

  return res.status(200).json({
    member: member.user,
    presence: {
      status: Presence.status,
      activity:
        Presence.activities.length > 0
          ? Presence.activities[0].id === "custom"
            ? Presence.activities[1].name === "Spotify" &&
              Presence.activities[2]
              ? Presence.activities[2]
              : Presence.activities[1]
            : Presence.activities[0]
          : ["Nothing"],
    },
  });
});

client.login(DISCORD_BOT_TOKEN);

export default router;
