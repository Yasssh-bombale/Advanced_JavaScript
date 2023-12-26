// const hey = 100;
// console.log(hey);
const Num = new Number(100);
console.log(Num);

console.log(Math.random());

//FIXME: Note:- Math.randome always generate an number between the 0 and 1 ;

// TODO: Hence if we multiply it by 10 we will get an number between 0 and 9;
console.log(Math.random() * 10 + 1);
// Note: we are adding +1 because randome value can be 0.4 or in between 0 to 1 we want minimum 1 hence (Math.random() *10) suppose result would be 0.44 something and after this we are adding +1 and hence answer will be 1.44 we are having an gaurantee that minimum number will be generated 1 or greater than 1;
console.log(Math.floor(Math.random() * 10000 + 1));
