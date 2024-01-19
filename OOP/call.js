function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function User(userName, email, password) {
  // setUserName(userName);
  //here function is called but userName is not set we can refrence this key word of User context to setUserName function by using .call(this,props);
  setUserName.call(this, userName);
  this.email = email;
  this.password = password;
}

const user = new User("Yash", "demo@gmail.com", 123);
console.log(user);
