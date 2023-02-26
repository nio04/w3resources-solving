const input = "nishat is dumb"

const capFirst = inpput => {
  const arr = Array.from(input);
  return arr
    .map((el, index) => {
      if (index == 0) return el.toUpperCase();
      else return el;
    })
    .toString()
    .replaceAll(",", "");
}

console.log(capFirst(input))
