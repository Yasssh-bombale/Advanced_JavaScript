//todo:- 1) creating an pure functions;
console.log("**Pure Functions**");

function demo1(a, b) {
  console.log(`This is an pure functions ${a + b}`);
}
let a = demo1(2, 3);
let b = demo1(2, 3);

console.log("**Impure Functions**");

function demo2(a) {
  console.log(Math.random() * a);
}
//! here we are passing an same input twice but we are getting an different output ;
let c = demo2(2);
let d = demo2(2);

console.log("***Impure Functions example 2");
console.log();

let global = 20;

function demo3() {
  global = 40;
  console.log(
    `im an example 2 of impure functions in which global value is being changed ${global}`
  );
  console.log(global);
}
demo3();
