// all the properties in javascript is basically an object;
// String,Array,Functions are objects end of the day;
// Prototypal inheritance is followed by below;

/* 

  Array-------->Object---->null
  String------->Object---->null
  Function----->Object----->null

  Array contains Object prototypes  means all the properties inside the object can be accessible by the Arrays; same follows for other props;

*/

function sayHello() {
  console.log(`Hey Hellow !`);
}

// add custome function in object prototype and it can be accesible by function.proto;

Object.prototype.Demo = function () {
  console.log("I am Demo can be accessible by all objects !");
};
sayHello.Demo(); //Output will be generated as above log statement;

//Demo can be accessible by String and Array;

//String
const str = "blah something";
sayHello.Demo();

//Array
const Arr = ["yashu", true, 1234, { iAmKey: "iAmValue" }];
Arr.Demo();

// Demo is accessible to universally because String,Array,Function are having Prototypal inheritance or chaining to "Object {}" in simpler terms they are having Objects prototype hence Objects prototypes can be accessible to all String,Array,Function

// But in other case , Array's props is not be accsible to Object or its siblings String,Functions;
