
const express = require("express");
const app = express();

const PORT = 8080;
const server = require('http').createServer(app);
server.listen(PORT);