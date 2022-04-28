const express = require("express");
// dotenv helps to read data from environmental variables
require("dotenv").config();

// Importing color package to add color to the consol
const colors = require("colors");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port:${process.env.PORT}.`);
  if (process.env.DEBUG) {
    console.log(colors.bgYellow.black.bold("Debug mode is on."));
  }
});
