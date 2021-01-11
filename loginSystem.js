const express = require("express");
const app = express();
app.use(express.json());
var dataBase = []; // array for storing values

app.post("/signup", function(request, response) {
  var allFieldsRequired = [
    request.body.username,
    request.body.password,
    request.body.name,
    request.body.phoneNumber,
    request.body.email
  ];
  // fields checking loop
  for (var allFieldsRequireds of allFieldsRequired) {
    if (!allFieldsRequireds) {
      response.status(404);
      return response.json({ error: "Mandatory Fields required!!!" });
    }
  }
  // getting values
  var Users = [
    // users
    {
      username: request.body.username,
      password: request.body.password,
      name: request.body.name,
      phoneNumber: request.body.phoneNumber,
      email: request.body.email
    }
  ];
  // push all fields into arrays
  for (var checkFields of Users) {
    dataBase.push(checkFields);
  }
  console.log("Signup Successfully!!!");
  console.log(dataBase);
  //var userId = new Date().getTime();
  response.json({
    "Signup Successfully!!! userid =": "  " + new Date().getTime()
  });
});

// login
/*
app.post("/dataBase/login", function(request, response) {
  var LoginDetails = [
    { username1: request.body.username1, password1: request.body.password1 }
  ];
  for (var fields of LoginDetails) {
    if (!fields) {
      response.status(404);
      return response.json({ error: "Mandatory Fields required!!!" });
    }
  }
  var Login = [
    {
      username1: request.body.username1,
      password1: request.body.password1
    }
  ];
  if (LoginDetails[0].username1 == "rajavel123") {
    console.log("suxxess");
  } else {
    console.log("fail");
  }
  //response.status(200);
  // return response.json({ error: "successfully logged in" });
  // response.status(404);
  //  return response.json({ error: "please enter valid username and pssword" });
  console.log("login successfully");
  response.json("login");
  console.log(LoginDetails);
});*/
app.put("changePassword/:username", function(req, res) {
  let id = req.params.username;
  var data = allFieldsRequired;
  //data[id]["first_name"] = req.body.first_name;
  data[username]["password"] = req.body.password;
  //data[id]["email"] = req.body.email;
  // data[id]["gender"] = req.body.gender;
  //  data[id]["salary"] = req.body.salary;
  res.send(data);
  console.log(data);
});
console.log("Server Running");
app.listen(3000);
