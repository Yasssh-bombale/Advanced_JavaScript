// * 1) localScope;
function abcd() {
  // ! its an local Scope
  console.log(this);
}
abcd();

// ? 2) this keyword Value in global Scope!;

console.log(this);

// * 3) on the method;

let a = {
  name: () => {
    console.log(this);
  },
};
