var express = require("express");
var app = express();
var crypto = require("crypto"),
  algorithm = "aes-256-ctr";
password = "rr";
//encryption
function encrypt(text) {
  var cipher = crypto.createCipher(algorithm, password);
  var crypted = cipher.update(text, "utf8", "hex");
  crypted += cipher.final("hex");
  return crypted;
}

// Decryption
var crypto = require("crypto");
algorithm = "aes-256-ctr";
function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm, password);
  var dec = decipher.update(text, "hex", "utf8");
  dec += decipher.final("utf8");
  return dec;
}

var text = "Amma123";
var e = encrypt(text);
console.log(e);

var b = decrypt(e);
console.log(b);
app.listen(3000);
