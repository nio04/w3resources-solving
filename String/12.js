// const input = "nishatIslam";
// let seperator="-";

// const uncamelMe = (input, separator) => {
//   const arr = Array.from(input);
//   const store = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== arr[i].toUpperCase()) {
//       store.push(arr[i]);
//       arr.splice(arr.indexOf(arr[i]), 1);
//       i -= 1;
//     } else {
//       break;
//     }
//   }
//   return `${store.toString().replaceAll(",", "")}${separator ? separator : " "}${arr
//     .toString()
//     .replaceAll(",", "")}`;
// };

// console.log(uncamelMe(input, seperator));

// ! by using callBack function STYLE

const input = "nishatIslam";

const uncamelMe = (input, separator, callback) => {
  return callback(input, separator);
};

console.log(
  uncamelMe(input, "*", function (input, separator) {
    const arr = Array.from(input);
    const store = [];

    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== arr[i].toUpperCase()) {
        store.push(arr[i]);
        arr.splice(arr.indexOf(arr[i]), 1);
        i -= 1;
      } else {
        break;
      }
    }
    return `${store
      .toString()
      .replaceAll(
        ",",
        ""
      )}${separator ? separator : " "}${arr.toString().replaceAll(",", "")}`;
  })
);
