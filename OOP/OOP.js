// TODO:  importance of new keyword instance;

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  /* 
   console.log(this); this keyword refer to the curret context here this will create an empty object{};and then we will add value in it like wise ex:this.nam=name;name is an parameter;
   */
}
const userOne = new User("Yash", "demo@gmail.com", 123);
// without new keyword userTwo will overRide userOne values ; hence when we are using "new" keyword it will assign an new instance to object and it stores values seperately without affecting or overRiding other objects out there in the system
const userTwo = new User("Roy", "xyz@gmail.com", 890);
console.log(userOne); //it will return an object created by this keyword and new keyword helps by assigning new instance;
console.log(userTwo);
