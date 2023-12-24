const arr1 = [1, 2, 3];

const obj1 = {
  name: "yash",
  email: "yashbombale@gmail.com",
  password: 123,
};
console.log({ ...obj1, name: "roy", password: 123 });
console.log(...arr1);
console.log({ ...obj1 });
console.log([...arr1]);
console.log([obj1, ...arr1]);
console.log(10, 20, 30, 40, ...arr1);
console.log(obj1, ...arr1);
