console.log("Node js - Week 1");

const fs = require("fs");

fs.writeFile("message.txt", "Hello Node.js week1", err => {
  if (err) throw err; 
console.log("The file 1 has been saved");
  
});

fs.writeFile("hello.txt", "Hello hello week1", err => {
  if (err) {
    throw err;
  } else {
    console.log("The file 2 has been saved");
  }
});
