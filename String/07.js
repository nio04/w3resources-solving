const input = "Nishat Islam from Bangladesh";

const parameterised = input => {
  const smol = input.toLowerCase();
  const replace = smol.replaceAll(" ","-")

  return replace;
}
console.log(parameterised(input))
