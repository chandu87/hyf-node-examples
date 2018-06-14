var express = require("express");
var app = express();

app.get("*",function(req, res){
    res.send("Page not found");
});
app.get("/", function(req, res){
    res.send("Hi there");
});
app.get("/bye", function(req, res){
    res.send("Bye Bye");
});
app.get("/cat", function(req, res){
    res.send("Meow!!!");
})

app.listen(3000, function(){
    console.log("Server started at Port : 3000");
})