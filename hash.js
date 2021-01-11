const express = require("express");
const app = express();
const crypto = require("crypto");
const secret = "abcdefg";
app.post("/hash", function(req, res) {
  var c = req.body.username;
  console.log(c);
  const hash = crypto
    .createHmac("sha256", secret)
    .update("sravanan")
    .digest("hex");
  res.send(hash);
});
app.listen(3000);
