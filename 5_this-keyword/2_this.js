function abcd(val1, val2, val3) {
  console.log(this, val1, val2, val3); // ? here this is referencing to the window;
}

let obj = { age: 20 };

// * now we wish to point this keyword in abcd()functions points to the obj; hence we need below code;
// ! function.call(---); the parameter which is being passed to them this keyword is being pointed;

abcd.call(obj, 1, 2, 3);
// 1) call function:- for passing an parameter in the .call  we simple do abcd(obj,1,2,3);
// 2) apply function:- we only pass 2 arguments using .apply fist one is this.konala point karl and second one is array[kiti arguments functions la pass krycha te];

// abcd.apply(obj, [1, 2, 3]);
