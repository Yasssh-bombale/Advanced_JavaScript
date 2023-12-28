// * implimenting the use of reducer in e-commerce projects by using realtime addtion in carts objects on the pricing key property;

const carts = [
  {
    cart: 1,
    name: "A",
    price: 10,
  },
  {
    cart: 1,
    name: "A",
    price: 10,
  },
  {
    cart: 1,
    name: "A",
    price: 10,
  },
  {
    cart: 1,
    name: "A",
    price: 10,
  },
  {
    cart: 1,
    name: "A",
    price: 10,
  },
];
// ? so here if we count manually sum of all cart object price is $50;implimenting this operation using an reduce();

const cartAddition = carts.reduce(
  (accumulator, cart1) => accumulator + cart1.price,
  0
  // * here are we are implimenting this in single line by explicite return
);
console.log(cartAddition); //result is:50

// const cartAddition=carts.reduce((accumulator,cart1)=>{
//   return accumulator+cart1.price
// here is an explicite return of the function
// },0);
