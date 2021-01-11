const web = require("express");
const app = web();
app.get("/sum", function(req, res) {
  var a = 10;
  b = 20;
  var c = a + b;
  console.log(c);
  res.send("<h1>Addition</h1>");
});
app.get("/sum/mul", function(req, res) {
  var a = 10;
  b = 20;
  var c = a * b;
  console.log(c);
  res.send("<h1>Multiply</h1>");
});
app.get("/sum/Div", function(req, res) {
  var a = 10;
  b = 20;
  var c = a / b;
  console.log(c);
  res.send("<h1>Division</h1>");
});
app.listen(3000);
