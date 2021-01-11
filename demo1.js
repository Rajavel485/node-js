const web = require("express");
const app = web();
app.use(web.json());
const port = 3000;
const user = {
  saravanan: "123",
  dinesh: "1234"
  //add: "234"
};
app.post("/login", (req, res) => {
  let username = req.body.saravanan;
  let password = req.body.add;
  let result = false;
  if (user[username] == password) {
    result = true;
    console.log(result);
  }
  res.json(result);
});
app.listen(port);
