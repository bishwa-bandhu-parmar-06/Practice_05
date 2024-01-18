const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.render("index");
  // res.render("index",{age : 12});
});

app.get ("/error", function(req, res, next){
  throw Error("Something went wrong");
});

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
});

app.listen(3000);