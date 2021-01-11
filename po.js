const express = require("express");
const employees = require("./employees");
const app = express();
app.use(express.json());
app.post("/employees/addEmployee", function(req, res) {
  if (!req.body.email) {
    res.status(404);
    return res.json({ error: "email is required" });
  }
  var addingEmployee = {
    id: employees.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
    salary: req.body.salary
  };
  employees.push(addingEmployee);
  res.send(addingEmployee);
  console.log(addingEmployee);
});
app.listen(3000);
