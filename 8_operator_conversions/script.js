console.log(1 + 2);
// expected output:3
console.log("1" + 2);
// expected output:12
console.log(1 + "2");
// expected output:12
console.log("1" + 2 + 3);
// expected output:123
console.log(1 + 2 + "3");
// expected output:33

// * now preFix operator and postFix operator
// ++x and x++;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let x = 3;
const y = x++;
console.log(`postfix`);
console.log(`x is ${x} and y is ${y}`);

// Note:Here x as x++ return an 3 value before incrementing hence y has 3 value and incremented value of x is stored in x which is 4  <>Answer is : x {4} y {3}</>

let x1 = 3;
const y1 = ++x1;

// Note:Here ++x return an  x1 value after incrementing  his value which is 3+1=4 y1 has 4 and x1 also has 4
console.log(`prefix`);
console.log(`x is ${x1} y is ${y1}`);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
