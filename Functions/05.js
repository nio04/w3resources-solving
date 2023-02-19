const input = "the quick brown fox";

const capsMe = input => {
  const split = input.split(" ");
  return  split.map((el) => {
    return el[0].toUpperCase() + el.replace(el[0], "");
  });
}
console.log(capsMe(input));
