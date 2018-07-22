class Contact {
	constructor (name, age, id){
		this.name = name;
		this.age = age;
		this.id = id;
	}

	set age (val){
		const numAge = JSON.parse(val);
//		 console.log(val);
//		 console.log(typeof (JSON.parse(val)) === 'number');
		if(typeof numAge === 'number')
			this._age = numAge;
	}
	get age (){
		return this._age;
	}
	set name(str){
		const strName = str.charAt(0).toUpperCase() + str.slice(1)
		// console.log(strName);
		this._name = strName;
	}
	get name(){
		return this._name;
	}
	set id(val){
		const numVal = Number(val);
		if (Number.isInteger(numVal)){
			this._id = numVal;
		}
	}
	get id(){
		return this._id;
	}

}

export default Contact;