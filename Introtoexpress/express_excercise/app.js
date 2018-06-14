var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("Hi Welcome to Express second assignment. ")
});
app.get("/speak/:animal", function(req, res){
    var animalName = req.params.animal;
    var animalRes = "";
    if(animalName === 'pig'){
        animalRes = "Oink!!";
    }
    else if(animalName == "cow"){
        animalRes = "Moo";
    }
    else if(animalName == "dog"){
        animalRes = "Woof Woof";
    }else{
        animalRes = "Try Again";
    }
    res.send(`The ${animalName} says ${animalRes}`);
})

app.listen(3000, function(){
    console.log("Server started at Localhost : 3000");
});