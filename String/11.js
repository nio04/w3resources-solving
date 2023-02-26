const input = "linus journey";

const camelMe = (input) => {
  const arr = Array.from(input);
  if (input.split(" ").length < 3) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === " ") {
        arr[i] = "";
        const temp = arr[i + 1];
        arr[i + 1] = arr[i + 1].toUpperCase();
      }
    }
  } else {
    return "length is grater than 2"
  }
  return arr.toString().replaceAll(",", "");
};

console.log(camelMe(input));
