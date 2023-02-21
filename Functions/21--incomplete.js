const input = [1, 2, 3];
const store = [];
store.push(input);

for (let i = 0; i < input.length * 2; i += 1) {
  let temp = input;
  console.log(temp, "before")
  temp.splice(i, 1);
  console.log(temp, "after")
  store.push(temp);
  temp = input;
  console.log(temp, "really after")
}

console.log(store)
