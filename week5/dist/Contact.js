'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
class Contact {
	constructor(name, age, id) {
		this.name = name;
		this.age = age;
	}

	set age(val) {
		//		 console.log(val);
		//		 console.log(typeof (JSON.parse(val)) === 'number');
		if (typeof JSON.parse(val) === 'number') this._age = val;
	}

	get age() {
		return this._age;
	}
}

exports.default = Contact;
//# sourceMappingURL=Contact.js.map