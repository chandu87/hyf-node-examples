const fs = require('fs');
const util = require('util');

console.log("hello excercise 2");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile)

const readFileOne = readFile("text1.txt",'utf8');
const readFileTwo = readFile('text2.txt','utf8');

Promise.all([readFileOne, readFileTwo]).then((data)=>{
//console.log("Both files are read");
//console.log(data.join(' & '));
writeFile("result.txt", data.join()).then(()=>{
    console.log("File wrote");
});
}).catch(()=>{
console.log("error");
});