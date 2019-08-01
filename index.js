require("dotenv").config();
const server = require("./server/server");
const port = process.env.PORT || 3888;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
