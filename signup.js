const express = require("express");
const app = express();
app.use(express.json());
app.post("/signup", function(request, response) {
  var signUp = [
    {
      usrename: request.body.username,
      password: request.body.password,
      name: request.body.name,
      phoneNumber: request.body.phoneNumber,
      email: request.body.email
    }
  ];
  response.json();
  module.exports = signUp;
});
app.listen(3000);
