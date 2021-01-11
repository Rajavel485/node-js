var express = require("express");
var employees = require("path");
var app = express(); //pp.use("./", express.static(_dirname + "./"));
app.get("/", function(req, res) {
  res.sendFile("form.html", { root: employees.join(__dirname, "./") });
});
app.get("/success", function(req, res) {
  var a = parseInt(req.query.username);
  var b = parseInt(req.query.password);
  if (a == 0 && b == 0) {
    res.sendFile("success1.html", { root: employees.join(__dirname, "./") });
  } else {
    var c = a + b;
    res.send("sum value" + " " + c);
    console.log(c);
  }
  //} else {
  //res.send("error");
  //}
});
app.listen(3000);
