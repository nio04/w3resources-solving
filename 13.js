const input = "ha!";

const concatinateMe = (input, nth, callback) => {
  return callback(input, nth);
}

console.log(concatinateMe(input, 5, function (input, nth) {
  const arr = [];

  for (let i = 1; i <= nth; i += 1){
    arr.push(input);
  }
  return arr.toString().replaceAll(",", "");
}));
