function main() {
  const name = "yash";

  function printName() {
    console.log(`${name}`);
  }
  return printName;
}

const getName = main(); //main() will return an printName function but also returns its lexical scope means printName has access to name;

getName();
