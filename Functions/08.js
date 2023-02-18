const input = 4;

const checkPrime = input => {
  let flags = true;
  for (let i = input - 1; i > 1; i -= 1){
    if (input % i === 0) flags = false;
  }

  return flags === true ? "prime" : "not prime";
}

console.log(checkPrime(input));
