const a = document.getElementById("heading");
a.style.backgroundColor = "red";

const myul = document.querySelector("ul");

const myli = document.querySelectorAll("li");
// it will give an nodelist which is not similar to the array to access this nodelist element we need to acccess it as myli[0] in this fashion we can access

// console.log(myli);
myli[0].style.backgroundColor = "yellow";
myli[2].style.backgroundColor = "green";
