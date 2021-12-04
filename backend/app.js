const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
//db connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("DB connecting ....");
}).catch(() => {
  console.log("Unable to connect to DB");
});
//use parsing middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors);

//port

const port = process.env.PORT || 8000;

//starting a server

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
