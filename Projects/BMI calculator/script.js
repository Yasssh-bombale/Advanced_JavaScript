const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = document.querySelector("#height");
  // console.log(isNaN(height));
  // console.log(typeof height.value);
  // * Input gives an values in strings we need to convert it into the integer it can be done by parseInt();

  const heightValue = parseInt(height.value);
  // console.log(typeof heightValue); // typeChecking
  const weight = document.querySelector("#weight");
  const weightValue = parseInt(weight.value);
  // console.log(typeof weightValue); //typeChecking
  // console.log(isNaN(heightValue));
  const result = document.querySelector("#result");
  if (heightValue === "" || heightValue < 0 || isNaN(heightValue)) {
    result.innerHTML = `please enter valid number ${heightValue}`;
  } else if (weightValue === "" || weightValue < 0 || isNaN(weightValue)) {
    result.innerHTML = `please enter valid number ${weightValue}`;
  } else {
    const BMI = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(
      2
    );
    result.innerHTML = `<span>BMI is :- ${BMI}</span>`;
  }
});
