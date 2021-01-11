const express = require("express");
const app = express();
app.use(express.json());
var users = []; // array for storing values

var i = 1; // id for users
app.post("/signup", function(request, response) {
  // sign up
  //getting values from users
  var user = [
    {
      id: i,
      username: request.body.username,
      password: request.body.password,
      name: request.body.name,
      phoneNumber: request.body.phoneNumber,
      email: request.body.email
    }
  ];
  // all fields mandatory checking loop
  var isSignup = true;
  for (var checkFields of user) {
    if (!checkFields) {
      isSignup = false;
      response.status(404);
      return response.json({ error: isSignup });
    }
    var size = checkFields.password;
    var length = size.length;
    // password minimum 8 character character checking
    if (length < 8) {
      response.status(404);
      return response.json({
        error: "please enter minimum 8 character of password"
      });
    }
  }

  // push all fields into arrays
  for (var use of user) {
    users.push(use);
    isSignup = true;
  }
  console.log(isSignup);
  i++; // id increment
  response.json({
    userid: +new Date().getTime() // user id generator
  });
});

// login
app.post("/login", function(request, response) {
  var loginDetails = [request.body.username, request.body.password];
  // all fields mandatory checking loop
  for (var logincheck of users) {
    if (!logincheck) {
      response.status(404);
      console.log("Username and Password are required!!!");
      return response.json({ error: "Username and Password are required!!!" });
    }
  }
  // username && password checking
  var isActive = false; // users active login or not check
  var isCheckuser = false;
  var username = request.body.username;
  var password = request.body.password;
  for (var verifyUser of users) {
    if (username == verifyUser.username && password == verifyUser.password) {
      isCheckuser = true;
      break;
    }
  }
  // checking
  if (isCheckuser == true) {
    isActive = true;
    console.log("successfully login");
    response.json({ login: isCheckuser, isactive: isActive });
  } else {
    console.log("please enter valid username and password");
    response.json({ error: "please enter valid username and password" });
  }
});

// change password
app.put("/changePassword/:username", function(request, response) {
  var username = request.params.username;
  var oldPassword = request.body.oldPassword;
  for (var passwordChange of users) {
    // enter password and old password check

    if (
      passwordChange.username == username &&
      passwordChange.password == oldPassword
    ) {
      passwordChange.password = request.body.password;
      // minimum 8 character password check

      var isSuccess = false;
      if (request.body.password.length > 8) {
        isSuccess = true;
        console.log("successfully changed paswword");
        response.json({ changePassword: isSuccess });
      } else {
        console.log("please enter minimum 8 character");
        response.json({ error: "please enter minimu 8 character" });
      }
    } else {
      console.log("enter the correct username or old password");
      response.json({ error: "enter the correct username or old password" });
    }
  }
});
app.get("/particularusers", function(request, response) {
  var id = request.body.id;
  var isUser = false;
  for (var check of users) {
    if (id == check.id) {
      isUser = true;
    }
  }

  if (isUser == true) {
    for (var checkUser of users) {
      if (checkUser.id == id) {
        response.json(checkUser);
      }
    }
  } else {
    response.json({ error: "enter valid id" });
  }
});
//users details

app.get("/users", function(request, response) {
  response.json(users);
});

console.log("Server Running");
app.listen(3000);
