class User {
  constructor(userName, password, email) {
    this.userName = userName;
    this.password = password;
    this.email = email;
  }
  //methods;
  encryptPassword() {
    return `${this.password}abc`;
  }
  capitalizeUserName() {
    return `${this.userName.toUpperCase()}`;
  }
}

const User1 = new User("Yash", 123, "demo@gmail.com");
console.log(User1);
console.log(User1.encryptPassword());
console.log(User1.capitalizeUserName());

//Behind the scene;

function User2(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
const demo = new User2("demo", "blah@gmail.com", 123);
console.log(demo.encryptPassword());
