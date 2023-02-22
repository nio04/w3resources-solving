const input = "axbbac";

const myFunc = (input) => {
  const arr = Array.from(input);
  const sort = arr.sort();
  let res = "";

  let i = 0;
  while (i < sort.length) {
    if (sort[i] === sort[i + 1]) {
      i += 2;
    }
    else if (sort[i] !== sort[i + 1]) {
      res = sort[i];
      break
    }
  }
  return res;
};
console.log(myFunc(input));
