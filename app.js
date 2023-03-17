const addDays = require("date-fns/addDays");

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const courrentDate = new Date();
  const newDate = addDays(courrentDate, 100);
  const result = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  response.send(result);
});

module.exports = app;
