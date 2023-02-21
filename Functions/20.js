const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const key = 8;

const genrateStringByKey = ((input, key) => {
  let store = "";

  for (let i = 0; i < key; i += 1){
    const random = Math.trunc(Math.random() * input.length + 1);
    store += input[random];
  }
  return store;
})

console.log(genrateStringByKey(input, key))
