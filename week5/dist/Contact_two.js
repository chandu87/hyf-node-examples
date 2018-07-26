"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Person {
  constructor(name, id, age) {
    if (!name || !id) throw "Name and id are required.";
    this.name = name;
    if (age) this.age = age;
    this.id = id;
  }

  set age(val) {
    // console.log(val);
    if (typeof val === "number") return this._age = val;
    throw "Age should be a number.";
  }

  get age() {
    return this._age;
  }

  set name(val) {
    if (typeof val === "string") return this._name = val;
    throw "Name should be a string.";
  }

  get name() {
    return this._name;
  }
  set id(val) {
    if (typeof val === 'number') return this._id = val;
    throw "ID should be a number";
  }
  get id() {
    return this._id;
  }
}

class Contact extends Person {
  constructor(name, id, age, phone, email) {
    if (age) {
      super(name, id, age);
    } else super(name, id);
    if (email && phone) {
      this.phone = phone;
      this.email = email;
    } else {
      throw "Phone Number and Email-ID is needed";
    }
    let nameParts = name.split(" ");
    this.firstName = nameParts.shift();
    this.lastName = nameParts.join(" ");
  }
  set phone(val) {
    if (typeof val === 'number' && val.toString().length == 8) return this._phone = val;
    throw "Phone number should be a 8 digit number";
  }
  get phone() {
    return this._phone;
  }
  set email(val) {
    if (val.includes("@")) return this._email = val;
    throw "Email should contain '@' ";
  }
  get email() {
    return this._email;
  }
}

// export default Contact;
exports.Person = Person;
exports.Contact = Contact;
//# sourceMappingURL=Contact_two.js.map