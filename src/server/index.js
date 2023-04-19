import express from 'express';
import { PORT } from './config.js';
import MainApp from './routes/indexRoutes.js'
const app = express();

app.use(MainApp)
app.listen(PORT)
console.log(`Server is on port ${PORT}`);