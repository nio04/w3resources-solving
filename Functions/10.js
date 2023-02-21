const input = 4;

const matrix = input => {
  for (let i = 0; i < input; i += 1){
    for (let j = 0; j < input; j += 1){
      if (i === j) console.log(1);
      else console.log(0);
    }
    console.log("----")
  }
}

matrix(input)
