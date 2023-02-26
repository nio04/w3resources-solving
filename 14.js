const input = "hey! dummy! how are you?";
let pos = 5;
const insert = "xxXxx";

const insertAtPos = (input, pos, insert, callBack) => {
  return callBack(input, pos, insert);
};

console.log(
  insertAtPos(input, pos, insert, function (input, pos, insert) {
    if (pos === undefined && insert === undefined) return input;
    else if (pos === undefined && insert !== undefined)
      return `${insert} ${input}`;
    else {
      const arr = Array.from(input);
      for (let i = 1; i < arr.length; i += 1) {
        if (i === pos) {
          arr.push(" ");
          arr.push(" ");
          
          for (let j = arr.length - 1; j >= i; j -= 1) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
          }

          arr[i] = insert;

          for (let k = arr.length - 1; k > i + 1; k -= 1) {
            [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]];
          }
        }
      }
      return arr.toString().replaceAll(",", "");
    }
  })
);
