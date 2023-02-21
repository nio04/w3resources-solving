const input = 8128;

const perfectNumber = (input) => {
  //  ! first case
  const storeForFirst = [];
  for (let i = input - 1; i >= 1; i -= 1) {
    if (input % i === 0) {
      storeForFirst.push(i);
    }
  }
  const finalFirstStep = storeForFirst.reduce((acc, curr) => acc + curr);

  // ! second case
  const storeForSecond = [];

  for (let i = input; i >= 1; i -= 1) {
    if (input % i === 0) storeForSecond.push(i);
  }

  const secondStepSum = storeForSecond.reduce((acc, curr) => acc + curr);
  const finalSecondStep = secondStepSum / 2 === input;

  const result =
    finalFirstStep === input && finalSecondStep === true
      ? "Perfect Number"
      : "Not a perfect Number";

  return result;
};

console.log(perfectNumber(input));
