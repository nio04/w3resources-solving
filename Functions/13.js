const input = 16;

const getFactor = input => {
  const store = [];

  for (let i = input; i > 0; i -= 1){
    if (input % i === 0) store.push(i);
  }

  return store.sort((a,b) => a -b);
}

console.log(getFactor(input));
