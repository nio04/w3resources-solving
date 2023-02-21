const input = "im super sleepy. i want to sleep but i cant also!";
const key = "i";

const findOccurance = (input, key) => {
  const removeSpace = input.replaceAll(" ", "");
  let counter = 0;

  for (let i of removeSpace) {
    if (i === key) counter += 1;
  }

  return counter;
}

console.log(findOccurance(input, key));
