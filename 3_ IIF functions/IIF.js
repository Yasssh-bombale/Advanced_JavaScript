// * IIF functions are stands for Immediately invoked functions;

// ! basically an variables in the IIF functions is not accessible out of the IIf functions and variables inside the iif functions is also called an private variables ;

let ans = (function hey() {
  let private = 10;

  return {
    getter: function () {
      console.log(private);
    },
    setter: function (val) {
      private = val;
      console.log(private);
    },
  };
})();

console.log(ans.getter());
console.log(ans.setter(34));
console.log(ans.getter());
