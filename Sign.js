const express = require("express");
const sign = require("./signup");
const app = express();
app.use(express.json());
app.post("/sign/signing", function(request, response) {
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
    signup.push(checkFields);
  }
  console.log("Signup Successfully!!!");
  console.log(signup);
  //var userId = new Date().getTime();
  response.json({
    "Signup Successfully!!! userid =": "  " + new Date().getTime()
  });
});
