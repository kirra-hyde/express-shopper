const express = require("express");
const { items } = require("./fakeDb");
const app = express();

app.use(express.json());


app.get("/items", function (req, res) {
  return res.json({ items });
});

app.post("/items", function (req, res) {
  let request = req.body;
  items.push(request);
  return res.json({ added: request });

});

app.get("/items/:name", function (req, res) {

  let name = req.params.name;
  let item = items.find(item => item.name === name);

  return res.send(item);
});

app.patch("/items/:name", function (req, res) {

  let request = req.body;
  console.log("req param name", req.params.name);
  let itemIndex = items.findIndex(item => item.name === req.params.name);


  items[itemIndex] = request;


  return res.json({ updated: request });
});

app.delete("/items/:name", function (req, res) {

  let request = req.body;
  console.log("req param name", req.params.name);
  let itemIndex = items.findIndex(item => item.name === req.params.name);


  items.splice(itemIndex, 1);


  return res.json({ message: "Deleted" });
});














module.exports = app;