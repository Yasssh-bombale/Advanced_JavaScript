const str1 = new String("Yash");
console.log(str1);
console.log(str1[1]); // expected output = a

// indexOf
console.log(str1.indexOf("s")); // expected output= 2
// slice(start,end);
const Numbers = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];
console.log(Numbers);
console.log(Numbers[2]); //THREE

console.log(Numbers.slice(1, 4)); //Note it will not add 4 index ;expected o/p: [TWO THREE FOUR]

console.log(Numbers.slice(2, -1)); //OUTPUT:[THREE,FOUR,FIVE];

// includes("searchString");
console.log(Numbers.includes("FIVE")); //true
console.log(Numbers.includes("NULL")); //false;

const url = "https://github.com/yash bombale";
console.log(url);
console.log(url.replace(" ", "-"));
