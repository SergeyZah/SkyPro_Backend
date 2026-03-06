const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users')

dotenv.config()

const { PORT = 3005, API_URL = 'http://127.0.0.1' } = process.env;

const app = express();

app.get('/', (request, response) => {
    response.status(200);
    response.send("Hello, World!");
});

app.post('/', (request, response) => {
    response.status(200);
    response.send("Hello from POST");
});

app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});