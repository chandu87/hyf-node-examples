class Person {
  constructor(name, id, age) {
    if (!name || !id) throw "Name and id are required.";
    this.name = name;
    if (age) this.age = age;
    this.id = id;
  }

  set age(val) {
    // console.log(val);
    if (typeof val === "number") return (this._age = val);
    throw "Age should be a number.";
  }

  get age() {
    return this._age;
  }

  set name(val) {
    if (typeof val === "string") return (this._name = val);
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
    if (email && phone) {
          this.phone = phone;
          this.email = email;
        }else{
          throw "Phone Number and Email-ID is needed";
        }
    let nameParts = name.split(" ");
    this.firstName = nameParts.shift();
    this.lastName = nameParts.join(" ");
  }
  set phone(val){
    console.log("Phone number", val);
       console.log(typeof(val) === 'number');
        console.log(val.toString().length);

    if(typeof(val) === 'number' && val.toString().length == 8)
     this._phone = val;
  }
  get phone(){
    return this._phone;
  }
  set email(val){
      if (val.includes("@")) 
     this._email = val;

  }
  get email(){
    return this._email;
  }
}

// export default Contact;
export { Person, Contact };
