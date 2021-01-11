const express = require("express");
const employees = require("./employees");
const app = express();
app.use(express.json());
var arr = [];
for (var result of employees) {
  var employeesFirst = result.first_name;
  arr.push(employeesFirst);
}
app.get("/employees", function(req, res) {
  res.json(employees);
  console.log("displayed");
});
app.get("/employees/first_name", function(req, res) {
  res.json({ employeesFirst: arr });
  console.log(arr);
});
console.log("run");
app.listen(3000);
