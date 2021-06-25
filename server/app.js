const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Hello");
});

app.use((req, res) => {
    res.status(404).send("Page doesn't exist!");
  });

module.exports = app;