const input = "abacddbec";
const arr = Array.from(input);
const finalArray = [];

const getFirstNonRepetive = (arr) => {
  const replacer = "*";
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr.length - 1; j > i; j -= 1) {
      if (arr[i] === arr[j]) {
        let temp = arr[i];
        for (let k = 0; k < arr.length; k += 1) {
          if (arr[k] === temp) {
            arr[k] = "*";
          }
        }
        temp = "";
      }
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== replacer) finalArray.push(arr[i]);
  }
  return finalArray[0];
};

console.log(getFirstNonRepetive(arr));
