const express = require("express");
const employees = require("./employees");
const app = express();
app.use(express.json());
app.put("/employees/addEmployees/:id", function(req, res) {
  let id = req.params.id - 1;
  var data = employees;
  data[id]["first_name"] = req.body.first_name;
  data[id]["last_name"] = req.body.last_name;
  data[id]["email"] = req.body.email;
  data[id]["gender"] = req.body.gender;
  data[id]["salary"] = req.body.salary;
  res.json(data);
});
app.listen(3000);
