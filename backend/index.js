const express = require("express");
const mongoDBUrl = require("./config.js");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  response.status(234).send("Hello");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
