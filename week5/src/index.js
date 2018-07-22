import Contact from './Contact.js';

let richard = new Contact("richard", "20", "1");
console.log(richard);
console.log(Number("2"));
try{
richard.age = "adk";
}
catch(error){
    console.log(error);

}