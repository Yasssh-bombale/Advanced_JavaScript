const myNum = [1, 2, 3, 4, 5];
// here we can add numbers in array by using reduce()methods which containe an accumulator and currentvalue and initial value;
// * in general .reduce() function is used to add cart prices or some addtion operations in e commerce projects;

const newNum = myNum.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
  // initially accumulator will be 0 because i passed an initial value as zero look below after the scope; it will be like thise 0+currentValue then ans:1 then again accumulator will be 1 and it will be like 1+2 result 3 then again accumulator is 3+currentValue which is 3+4 result 7;till end of the array it will return the final accumulator value which is 15
}, 0);
console.log(newNum); //result:-15;
