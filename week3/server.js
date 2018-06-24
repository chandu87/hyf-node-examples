// const http = require('http');
// const fs = require('fs');
// const index = fs.readFileSync('src/index.html')

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/html'});
//     res.end(index);
// }).listen(3000, function(){
//     console.log("Server started at PORT: 3000");
// });


const express = require('express');
const app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get("/hello", function(req, res){
    res.send("Hello Express");
});
app.listen(3000, function(){
    console.log("Server Started");
})