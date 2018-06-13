var catMe = require('cat-me');
var konckknock = require('knock-knock-jokes');

var scores = [ 90, 98, 89, 100, 100, 86, 94];
console.log(Math.round(average(scores)));

function average(scores){
    let total= 0;
    scores.forEach(element => {
    total += element;
});

return total/scores.length;
}
console.log(catMe());   
console.log(konckknock());
