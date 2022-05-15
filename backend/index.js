import express from "express";
import cors from "cors";
import chalk from "chalk";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const logger = (c, m) => {
  const numberType = (num) => {
    const type = Number(num) === num && num % 1 === 0 ? "int" : "float";
    return type;
  };

  let text = c,
    n = 4,
    cut = false;
  if (c.length > n) {
    text = c.slice(0, n);
    cut = true;
  }
  const lettersLeft = (n - n * (text.length / n)) / 2;
  text = `${lettersLeft === 0 ? "" : " ".repeat(lettersLeft)}${text}${
    numberType(lettersLeft) === "float" ? " " : ""
  }${lettersLeft === 0 ? "" : " ".repeat(lettersLeft)}`;
  return console.log(
    `${chalk.bold(`[${cut ? chalk.red(text) : chalk.blue(text)}]`)} ${m}`
  );
};

const boldify = (m) => {
  return chalk.bold(m) + ".";
};

app.get("/changeActive/:active", (req, res) => {
  const { active } = req.query;
  logger("INFO", `Successfully changed active page to ${boldify(active)}`);
});

app.listen(9000, () => {});
