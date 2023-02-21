const input = [5, 2, 9, 10, 3, 8];
const key = 10;

const binarySearch = (input, key) => {
  const arr = input.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  let pos;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (key === arr[mid]) {
      pos = mid;
      break;
    } else if (key > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }

  const result = pos !== -1 ? "true" : "false";

  return `array:[${input}] --- found: ${result} --- position: ${pos}`;
};

console.log(binarySearch(input, key));
