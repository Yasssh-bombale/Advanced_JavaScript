// * Higher Order Functions;

function HigherOrder(val) {
  val();
}
// ! Calling an Higher order function which accepts an function as a argument in parameter;
HigherOrder(() => console.log("hey There I'm an Higher Order Functions !"));
