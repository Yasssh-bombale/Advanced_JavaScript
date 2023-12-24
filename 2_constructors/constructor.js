function buscuitsmaker(color, radius) {
  this.radius = radius;
  this.color = color;
  this.height = 10;
  this.width = 20;
}

let b1 = new buscuitsmaker("yellow", 5);
let b2 = new buscuitsmaker("black", 10);

console.log(b1);
console.log(b2);
