const input = "web development tutorial";

const getLargeWord = (input) => {
  const arr = input.split(" ");
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > max) max = arr[i];
  }
  if (arr[0].length === max) max = arr[0];
  return max;
};

console.log(getLargeWord(input));
