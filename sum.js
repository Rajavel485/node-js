const web = require("express");
const app = web();
app.use(web.json());
const port = 3000;
app.post("/sum", function(req, res) {
  let n = req.body.arrays;
  let sum = 0;
  console.log(n);
  for (let num of n) {
    console.log(num);
    sum = sum + num;
  }
  console.log(sum);
  res.json({ sum });
});
app.listen(port);
