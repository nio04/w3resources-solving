const input = "madam";
const copy = Array.from(input);
const arr = Array.from(input);

for (let i = 0; i < copy.length; i += 1) {
  for (let j = copy.length - 1; j >= 0; j -= 1) {
    if (copy[i] === copy[j]) {
      if (i === j) continue;
      console.log("matched", i, j, copy[i], copy[j]);
      if (i < j) {
        arr.splice(arr.indexOf(copy[i]), 1);
        arr.splice(arr.lastIndexOf(copy[j]), 1);
      }
      console.log(arr);
      break;
    }
  }
}
