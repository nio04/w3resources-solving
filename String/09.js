const input = "nishat is dumb";

const capFirsts = (input) => {
  const arr = input.split(" ");
  
  return arr.map((el) => {
    return el.replace(el[0], el[0].toUpperCase());
  });
};

console.log(capFirst(input));
