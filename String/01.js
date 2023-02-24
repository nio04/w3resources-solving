const input = "ami";

const checkString = input => {
  if (typeof input === "string") return true;
  else return false;
}

console.log(checkString(input))
