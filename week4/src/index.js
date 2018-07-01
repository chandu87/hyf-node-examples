import express from 'express';
const app = express();

app.get("/", function(req, res){
    res.send("Hello world");
});
app.get("/contact", function(req, res){
    res.send("Contact me - chandrasr.palle@gmail.com");
});
app.get("/test", function(req, res){
    res.send({name: "chandu"});
});
app.listen(3000, function(){
    console.log("Server started at : 3000");
});