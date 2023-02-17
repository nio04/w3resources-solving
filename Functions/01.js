const input = "32243";

const reverseInput = input => {
  const toString = input.toString();
  let res = "";
  for (let i = toString.length-1; i >= 0; i -= 1){
    res += toString[i]
  }
  return res;
}

console.log(reverseInput(input))
