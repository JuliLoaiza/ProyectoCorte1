const express = require('express')
//import routes from "./routes/routes.js";
//const PORT = require("./config.js")
const routes = require ("./routes/routes.js")
const app = express();
const PORT = 4000;

app.use(routes)
app.listen(PORT)
console.log(`Server is on port ${PORT}`);
