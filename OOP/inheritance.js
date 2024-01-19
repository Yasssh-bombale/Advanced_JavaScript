class User {
  constructor(userName) {
    this.userName = userName;
  }
  //methods;
  logMe() {
    console.log(`${this.userName} was logged in !`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }
  uploadLectures() {
    return `lecture was upload by lecturer name = ${this.userName}`;
  }
}

const person1 = new User("person1");
// person1.logMe();
// person1.uploadLectures();  will throw an error because User has no access to upload lec

const person2 = new Teacher("demo", "person2@gmail.com", 123);

// console.log(person2.uploadLectures());

person1.logMe();
person2.logMe();

console.log(person1 === person2);
console.log(person1 instanceof User); //person was created by User class hence it will give an true person1 has instance of User class;
console.log(person2 instanceof Teacher); //true
console.log(person1 instanceof Teacher); //false
console.log(person2 instanceof User); // true because it inherites User class hence it has instance of both User and Teacher class ;
