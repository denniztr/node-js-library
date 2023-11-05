const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');
const loggerOne = require('./middlewares/loggerOne');

dotenv.config();

const {
    PORT = 3000,
    API_URL = "http://127.0.0.1",
    MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL).catch(error => handleError(error));

const server = express();

//  middlewares 
server.use(cors());
server.use(loggerOne);
server.use(bodyParser.json());

//  router
server.use(userRouter);
server.use(bookRouter);

server.listen(PORT, () => {
    console.log(`Сервер запущен на: ${API_URL}:${PORT}`);
});