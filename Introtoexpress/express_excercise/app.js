var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Hi Welcome to Express second assignment. ")
});

app.listen(3000, function(){
    console.log("Server started at Localhost : 3000");
});