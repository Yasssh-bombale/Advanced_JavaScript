const a = document.getElementById("heading");
a.style.backgroundColor = "red";

const myul = document.querySelector("ul");

const myli = document.querySelectorAll("li");
// it will give an nodelist which is not similar to the array to access this nodelist element we need to acccess it as myli[0] in this fashion we can access

// console.log(myli);
myli[0].style.backgroundColor = "yellow";
myli[2].style.backgroundColor = "green";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++;

const common = document.getElementsByClassName("class-1");
const test = Array.from(common);
// * Note:Array.from() created an array from the array like objects; here common has the HTMLCollection which is an array like objects ;
console.log(common);
// ? If i want to change all the list items background to yellow then i have here forEach method because i converted the HTMLCOLLECTION to the Array ;

test.forEach((l) => (l.style.color = "yellow"));
