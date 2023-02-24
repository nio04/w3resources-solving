const input = "nishatIslam";
const key = 5;

const extractor = (input, key) => {
  return input.slice(0, key);
}

console.log(extractor(input, key))
