class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  get password() {
    return `blah${this._password}demon`; //giving ._password because it will throw an maximum call stack exceeded error; the reason behind this error is constructor is also trying to get oassword and password() is also trying to get password at the same time;
  }
  set password(value) {
    this._password = value;
  }
  get username() {
    return this._username.toUpperCase();
  }
  set username(val) {
    this._username = val;
  }
}

const p1 = new User("hero", "hero@gmail.com", "123");
console.log(p1.password);
console.log(p1.username);
