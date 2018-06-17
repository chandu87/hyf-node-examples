const Contact = require("./Contact.js");
const ContactList = require("./ContactList");

let person1 = new Contact("Richard", "30", "");
let person2 = new Contact("Mat", "30", "74837383");
// console.log(person1);
// person1.printAll();
// person2.printAll();
// person1.call();
// person2.call(); 

const list = new ContactList("hyf-contacts.json");
list.add(person1);
list.add(person2);
list.save();
// console.log(list);