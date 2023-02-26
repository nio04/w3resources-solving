const input = "NiShAt"

const convertCase = input => {
  const arr = Array.from(input);
  return arr.map(el => {
    if (el === el.toLowerCase()) return el.toUpperCase();
    else return el.toLowerCase();
  }).toString().replaceAll(',', "");
}

console.log(convertCase(input))


