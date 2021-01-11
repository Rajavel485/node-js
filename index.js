// const axios = require("axios").default;
// axios.get("http://192.168.1.3:3000/sum/mul").then((response) => {
//   let result = response.data.Results

// console.log(result)

// for(let i = 0;i<=5;i++){

//    console.log(result[i].Make_ID)

// }
//   console.log(response.data);
// });

// const express = require('express')
// const app = express()  // create an app for express

// app.get('/', (req, res) => {
//     //console.log("ready")
//    res.send ("<h1>Hello</h1>")
//   })

//   app.get("/search",(req,res) =>{

//     res.send("search tab")
//   })
//   app.listen(3000)

// const express = require('express')
//  const app = express()
//  const axios = require('axios').default;
//  axios.get("https://www.anapioficeandfire.com/api/characters").then((response) => {  // acting as client

//  var characters = response.data
//  for(var character of characters ){

//     app.get("/" , (req,res) => {   // acting as server

//         console.log("running")   // when hitting in browser , "running" display terminal
//         res.json(response.data)   // in browser
//     })
//     console.log(character)
//  }

//    console.log("hello")

// })

// app.listen(3000)

// (05-01-2020)  --  1. PROMISES

// const axios = require('axios').default;
// let p=   axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")

// p.then((res) => {
//     console.log(res.data)

// })
// p.catch((e) => {
//     console.log(e)
// })

//console.log(p)

//2. ANOTHER WAY OF WRITING   - CHAINING

// const axios = require('axios').default;
//  axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json").then((res) => {
//     console.log(res.data)

// }).catch((e) => {
//     console.log(e)
// })

//3. async await   --> it is function prefixed with async , and need to use await inside the function  -->

// const axios = require('axios').default;
// async function callApi(){

//     let response = await axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")

//     console.log(response.data)
// }

// callApi()

//4. POST , GET  METHOD

// const users = {
//   saravanan: "1234",
//   dinesh: "5678",
//   deepika: "9087",
// };

const employees = require("./employee");
const express = require("express");
const app = express();

app.use(express.json());

// app.post("/login", (req, res) => {

//   console.log(req.body);

//   // res.send("success")    --> this will send text

//   if (req.body.password == "0407") {
//     res.json({
//       //  this will send JSON
//       isSuccess: true,
//     });
//   } else {
//     res.json({
//       isSuccess: false,
//     });
//   }
// });

// GET METHOD -->  http://localhost:3000/login?userId=deepika&password=0407  -- > hit it like this in postman (use query string )

// app.get("/login", (req, res) => {
//   console.log(req.query);

//   if (req.query.password == "0407") {
//     res.json({
//       isSuccess: true,
//     });
//   } else {
//     res.json({
//       isSuccess: false,
//     });
//   }
// });

// //In this we are storing in the object (userName and password) and then hitting from postman

// app.post("/login", (req, res) => {
//   let userName = req.body.userName;
//   let password = req.body.password;

//   let result = { isSuccess: false };

//   if (users[userName] == password) {
//     result.isSuccess = true;
//   }

//   res.json(result);
// });

app.post("/sum", (req, res) => {
  console.log(req.body.numbers);

  let numArray = req.body.numbers;
  let sum = 0;

  for (num of numArray) {
    sum += num;
  }

  res.json({
    sum
  });
});

// PUT METHOD -->

app.put("/employees/addEmployee/:id", (req, res) => {
  let id = req.params.id - 1;
  var data = employees;
  data[id]["first_name"] = req.body.first_name;
  data[id]["last_name"] = req.body.last_name;
  // data[id]["email"] = req.body.email;
  // data[id]["gender"] = req.body.gender;
  // data[id]["salary"] = req.body.salary;

  res.json(data);
});

app.listen(3000);

// 5. Explanation for retrieving when key itself value (dynamically accessing)

//const users = {
//     saravanan: "1234",
//     dinesh: "5678",
//     deepika: "9087",
//   };

//   var name = "saravanan";
//   console.log(users[name]);
//   console.log(users["dinesh"]);

// if(users[userName] && users[userName].includes("password"))  ==> first will check for userName exists and then check for password
// (undefined does not have includes function)
