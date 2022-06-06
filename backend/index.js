import express from "express";
import cors from "cors";
import { logger, boldify } from "./functions/index.js";
import { spotify, discord, contact } from "./router/index.js";
import "dotenv/config";

const { PORT } = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/spotify", spotify);
app.use("/discord", discord);
app.use("/contact", contact);

app.listen(PORT, () => {
  logger("info", `Listening at port ${boldify(PORT)}`);
});
