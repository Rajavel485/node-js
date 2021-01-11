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
  for (var allFields of Users) {
    dataBase.push(allFields);
  }
  console.log("Signup Successfully!!!");
  //var userId = new Date().getTime();
  response.json({
    "Signup Successfully!!! userid =": "  " + new Date().getTime()
  });
});

app.post("/login", function(request, response) {
  var allFieldsRequired = [request.body.username, request.body.password];
  // fields checking loop
  for (var allFieldsRequireds of allFieldsRequired) {
    if (!allFieldsRequireds) {
      response.status(404);
      console.log("Username and Password are required!!!");
      return response.json({ error: "Username and Password are required!!!" });
    }
  }
  var checkuser = 0;
  var username = request.body.username;
  var password = request.body.password;
  for (var verifyUser of dataBase) {
    if (username == verifyUser.username && password == verifyUser.password) {
      checkuser = 1;
      break;
    }
  }
  if (checkuser == 1) {
    console.log("successfully login");
    response.json({ login: "success" });
  } else {
    console.log("failed");
    response.json({ login: "failure" });
  }
});

app.put("/changePassword/:username", function(request, response) {
  var username = request.params.username;
  console.log(username);
  for (var allFieldsRequireds of allFieldsRequired) {
    if (allFieldsRequireds.username == username) {
      allFieldsRequireds.password = request.body.password;
      response.json("successfully changed password");
    } else {
      response.json("enter the correct username");
    }
  }
});

app.get("/allfieldsrequired", function(request, response) {
  response.json(dataBase);
});

console.log("Server Running");
app.listen(3000);
