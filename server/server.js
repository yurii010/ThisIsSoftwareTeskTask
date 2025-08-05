require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const DB_PATH = "./likeDB.json";

function readUsers() {
  const data = fs.existsSync(DB_PATH) ? fs.readFileSync(DB_PATH, "utf8") : "[]";
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), "utf8");
}

app.get("/users", (req, res) => {
  const users = readUsers();
  res.json(users);
});

app.post("/users", (req, res) => {
  const users = readUsers();
  const newUser = req.body;

  if (!newUser) {
    return res.status(400).json({ error: "Invalid user data" });
  }

  const exists = users.some((user) => user.login.uuid === newUser.login.uuid);
  if (exists) {
    return res.status(409).json({ error: "User already exists" });
  }
  users.push(newUser);
  writeUsers(users);
  res.status(200).json(newUser);
});

app.delete("/users/:id", (req, res) => {
  let users = readUsers();
  const { id } = req.params;
  const initialLength = users.length;
  users = users.filter((user) => user.login.uuid !== id);
  if (users.length === initialLength) {
    return res.status(404).json({ error: "User not found" });
  }
  writeUsers(users);
  res.status(200).end();
});

app.get("/saved", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

const clientBuildPath = path.resolve(__dirname, "../client/dist");

app.use(express.static(clientBuildPath));

const PORT = process.env.PORT || 3001;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(BASE_URL);
});
