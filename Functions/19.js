const input = [2, 4, 6, 8, 10, 1, 5, 7, 9];
const key = 5;

const getGreater =(input, key) => {
  return input.filter(el => el >= 5);
}

console.log(getGreater(input, key))
