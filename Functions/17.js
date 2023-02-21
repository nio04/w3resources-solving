const input = "i am a very noob and dumb programmer";

const getCharOccurance = (input) => {
  const finalInput = input.replaceAll(" ", "");
  const arr = finalInput.split("");
  const sortedChar = arr.sort();
  const storeOccurance = [];
  const storeFinal = [];

  for (let i = 0; i < sortedChar.length; i += 1) {
    let temp = 0;
    for (let j = 0; j < sortedChar.length; j += 1) {
      if (sortedChar[i] === sortedChar[j]) {
        temp += 1;
      }
    }
    storeOccurance.push(temp);
    sortedChar.splice(i, temp-1);
  }

  for (let i = 0; i < sortedChar.length; i += 1){
    storeFinal.push(` ${sortedChar[i]} = ${storeOccurance[i]} `);
  }
  return `input:-> ${input}
  OCCURANCE: -> ${storeFinal.toString()}`;
};

console.log(getCharOccurance(input));
