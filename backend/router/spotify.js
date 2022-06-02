import express from "express";
import { logger, boldify } from "../functions/index.js";
import querystring from "querystring";
import fetch from "node-fetch";
import "dotenv/config";

const router = express.Router();
const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

router.get("/", async (req, res) => {
  const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token,
      }).toString(),
    });

    return response.json();
  };

  const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  };

  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    res.status(200).json({ isPlaying: false });
    return logger("INFO", `No song currently playing`);
  }

  const song = await response.json();
  const isPlaying = song?.is_playing;
  const title = song?.item.name;
  const artist = song?.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song?.item.album.name;
  const albumImageUrl = song?.item.album.images[0].url;
  const songUrl = song?.item.external_urls.spotify;

  logger("INFO", `Currently listening to ${boldify(`${artist} - ${title}`)}`);

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
});

export default router;
