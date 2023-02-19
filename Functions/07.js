const input = "Hridita";

const getAllVowel = input => {
  const toSmall = input.toLowerCase().replaceAll(" ","");
  const arr = Array.from(toSmall);
  let counter = 0;
  for (let i of arr) {
    if (i === "a" || i === "e" ||i ==="i" || i === "o" || i === "u") counter += 1;
  }
  return counter;
}

console.log(getAllVowel(input));
