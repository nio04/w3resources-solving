const input = "Nishat islam";
const t = input.indexOf("i");

console.log(t);


const camelCase = (input) => {
  let temp = input
  const arr = Array.from(input);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === " ") {
     temp =  temp.replace(temp.indexOf(temp[i+1]),temp[i+1].toUpperCase())
    //   arr.splice(arr.indexOf(" "), 1);
    }
  }
  return temp;
};

console.log(camelCase(input));
