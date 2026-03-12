const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/users");
const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require('./middlewares/loggerTwo');

dotenv.config();

const { PORT = 3005, API_URL = "http://127.0.0.1", MONGO_URL = "mongodb://127.0.0.1:27017/test" } = process.env;

mongoose
  .connect(MONGO_URL)
  .catch((error) => handleError(error));


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  response.status(200);
  response.send("Hello, World!");
});

app.use(loggerOne);
app.use(loggerTwo);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});
