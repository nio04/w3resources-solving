const input = "nishat islam";

const toAbbreviate = input => {
  const split = input.split(" ");
  const secondPart = split[1];
  const secondFinal = secondPart[0];
  if (split.length > 1) {
    return `${split[0]} ${secondFinal.toUpperCase()}.`
  }
}

console.log(toAbbreviate(input))
