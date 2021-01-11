const fs = require("fs");
const utf8 = require("utf8");
fs.writeFile("calc2.js", "var a=10;var b=20; console.log(a+b);", function(err) {
  console.log("cal2.js created");
});
fs.appendFile("calc2.js", "var a=10; var b=10; console.log(a*b);", function(
  err
) {});
fs.readFile("/home/pradeep/Downloads/IMG_20191210_111000.jpg", function(
  err,
  data
) {
  console.log(err);
  console.log(data.toString());
});
