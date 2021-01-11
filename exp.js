var express = require("express");
var employees = require("path");
var app = express(); //pp.use("./", express.static(_dirname + "./"));
app.get("/", function(req, res) {
  res.sendFile("form.html", { root: employees.join(__dirname, "./") });
});
app.get("/success", function(req, res) {
  if (req.query.password == "123") {
    res.sendFile("success.html", { root: employees.join(__dirname, "./") });
  } else {
    res.send("404 error");
  }
});
app.listen(3000);
