const express = require("express");
const app = express();

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.get("/", (req, res) => {
    res.status(200).send("Hello");
});

app.use((req, res) => {
    res.status(404).send("Page doesn't exist!");
  });

module.exports = app;