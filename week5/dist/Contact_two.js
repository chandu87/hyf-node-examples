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
		if (typeof val === 'number') return this._age = val;
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
}

class Contact extends Person {
	constructor(name, id, age, phone, email) {
		if (age) {
			super(name, id, age);
		} else super(name, id);
		this.phone = phone;
		this.email = email;

		let nameParts = name.split(" ");
		this.firstName = nameParts.shift();
		this.lastName = nameParts.join(" ");
	}
}

// export default Contact;
exports.Person = Person;
exports.Contact = Contact;
//# sourceMappingURL=Contact_two.js.map