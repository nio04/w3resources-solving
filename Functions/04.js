const input = "webmaster";

const orderMeFull = (input) => {
  const arr = Array.from(input);
  const sort = arr.sort();
  return sort.toString();
}

console.log(orderMeFull(input));
