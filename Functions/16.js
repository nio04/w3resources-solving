const input = "nishatLoveshriditaButsheDoesntloveshimBack";
const exclude = "aeiou";

const finalStringBuilder = (input, extractor) => {
  const toSmall = input.toLowerCase();
  const mainInputArr = toSmall.split("");
  const excludeArr = extractor.split("");

  for (let i = 0; i < mainInputArr.length; i += 1) {
    for (let j = 0; j < excludeArr.length; j += 1) {
      if (mainInputArr[i] === excludeArr[j]) {
        mainInputArr.splice(i, 1);
      }
    }
  }
  return mainInputArr.toString().replaceAll(",", "");
};

console.log(finalStringBuilder(input, exclude));
