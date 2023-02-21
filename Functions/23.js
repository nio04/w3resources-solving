const input = "abacdbec";

const getFirstNotRepeat = (input) => {
  const arr = Array.from(input);
  let temp;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr.length; j += 1) {
      if (arr[i] !== arr[j]) {
        temp = arr[i];
        if (arr[i] === arr[j]) {
          console.log(temp, "temp");
          temp = "";
        }
      }
    }
  }
  return temp;
};

console.log(getFirstNotRepeat(input));
