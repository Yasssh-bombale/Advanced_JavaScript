Math.PI = 5;

const a = Object.getOwnPropertyDescriptor(Math, "PI"); //first give an object and then property name you want to check it is writable or not or property description !

const obj = {
  username: "yashu",
};
console.log(Object.getOwnPropertyDescriptor(obj, "username"));

Object.defineProperty(obj, "username", {
  writable: false,
});

obj.username = "hey there";
console.log(obj.username);
