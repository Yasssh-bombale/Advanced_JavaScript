const myRandomNum = (max, min) => {
  // Give an max number and min number you want to generate number in between it will returns an number
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// const num = myRandomeNum(50, 10);
// console.log(num);
export default myRandomNum;
