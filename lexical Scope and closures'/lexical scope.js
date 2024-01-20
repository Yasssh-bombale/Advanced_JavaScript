const main = () => {
  const name = "yash";

  function inner() {
    let val = 10;
    console.log(`innner function :${name}`); //it has access to name because of lexical scope;
  }
  inner();
  console.log(val); //main has no access to val becuase val has declared inside the inner function and val has no accessible outside of the inner() lexical scope;
};
main();
