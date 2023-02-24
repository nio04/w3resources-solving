const input = "abracadabra";

const checkPalindrome = (input) => {
  let left = 0;
  let right = input.length - 1;
  let store = "";
  for (let i = 0; i < input.length-1; i += 1) {
    if (input[left] !== input[right]) {
      left += 1;
      right -= 1
    } else {
      store += input[i];
    }
  }
  return store;
};

console.log(checkPalindrome(input));
