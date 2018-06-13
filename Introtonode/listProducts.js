var fakerP = require('faker');
for(let i=0; i<10; i++){
    console.log(fakerP.commerce.productName() + ' - $' +fakerP.commerce.price());
}
