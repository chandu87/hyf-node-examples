const http = require('http');

http.createServer(function(req, res){
    res.write("Hello Server!!");
    res.end();
}).listen(3000, function(){
    console.log("Server started at PORT: 3000");
});