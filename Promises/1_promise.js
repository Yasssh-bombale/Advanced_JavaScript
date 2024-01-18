const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Completed async task !`);
    resolve(); // we are connecting promise with .then() using resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log(`promise consumed !`);
});

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "yash", password: 123 });
  }, 1000);
});

promiseTwo.then((user) => {
  console.log(user);
});
