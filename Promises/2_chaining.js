const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: "Yash", email: "example@gmail.com", password: 123 });
    } else {
      reject(`ERROR:Something went wrong !`);
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.log(error);
  });
