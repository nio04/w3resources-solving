const input = "example.com";

const deleteRepetation = (input) => {
  const arr = Array.from(input);
  const copy = arr.slice();

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = arr.length; j > i; j -= 1) {
      if (arr[i] === arr[j]) {
        copy.splice(copy.lastIndexOf(arr[j]), 1);
      }
    }
  }
  // return copy
  const string = copy.toString();
  let final = "";
  //   const store = [];
  for (let i = 0; i < string.length; i += 1){
    if (string[ i ] === ",") continue;
    else final += string[ i ];
  }

  return final;
  // const finalString = string.replaceAll(",", "");
  // return string.replaceAll(",", "");
};
console.log(deleteRepetation(input));
