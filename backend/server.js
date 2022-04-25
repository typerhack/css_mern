const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port:${process.env.PORT}`);
});
