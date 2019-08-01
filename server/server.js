const express = require("express");
const request = require("request");
const testapi = require("./routes/testapi");
const oauth = require("./routes/oauth");
const server = express();

server.use(express.json());
server.use("/test", testapi);
server.use("/oauth", oauth);

server.get("/", (req, res) => {
  res.json({ message: "Connected" });
});

module.exports = server;
