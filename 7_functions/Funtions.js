const demoFunction = (val1, val2, ...num1) => {
  return num1;
};

// ...num1 is an rest operator which is used to retirive functions all arguments which is dynamically generated and we do not know how many arguments will be passed by users ;

const demo = demoFunction(100, 200, 300, 400);
console.log(demo);
