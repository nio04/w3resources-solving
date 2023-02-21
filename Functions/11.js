const input = [1, 2, 3, 4, 5];

const getSecondLowestANDlargest = input => {
  const forLarge = input.sort((a, b) => b - a);
  const secondLarge = forLarge[1];
  const forLow = input.sort((a, b) => a - b);
  const secondLow = forLow[1];
  return `secondLarge = ${secondLarge}, secondLow = ${secondLow}`;
}

console.log(getSecondLowestANDlargest(input))
