import express from "express";

//const PORT = require("./config.js")

const app = express();
const PORT = 4000;
app.listen(PORT)
console.log(`Server is on port ${PORT}`);