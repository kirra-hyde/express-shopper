const express = require("express");
const { items } = require("./fakeDb");
const app = express();

app.use(express.json());


app.get("/items", function (req, res) {
  return res.json(items);
});

app.post("/items", function(req, res) {
  request = req.body;
  items.push(request);
  return res.json({added: request});

});














module.exports = app;