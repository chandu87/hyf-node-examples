var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi Welcome to Express second assignment. ");
});
app.get("/speak/:animal", function(req, res) {
  var sounds = {
    pig: "Oink!",
    dog: "Woof Woof",
    cat: "Meow",
    goldfish: "..."
  };
  var animalName = req.params.animal;
  var animalRes = sounds[animalName];
  res.send(`The ${animalName} says ' ${animalRes} '`);
});

app.get("/repeat/:message/:number", function(req, res) {
  var messageText = req.params.message;
  var numberOfTimes = Number(req.params.number);
  var responseResult = "";
  for (i = 0; i < numberOfTimes; i++) {
    responseResult = responseResult + " " + messageText;
  }
  res.send(responseResult);
});

app.get("*", function(req, res) {
  res.send("Page not found. What are you doing with your life?");
});
app.listen(3000, function() {
  console.log("Server started at Localhost : 3000");
});
