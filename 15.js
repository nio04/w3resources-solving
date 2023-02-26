const humanNumber = (input) => {
  const arr = Array.from(String(input));
  const temp = String(input);
  const getNumber = temp[temp.length - 1];

  switch (getNumber) {
    case "1":
      arr.push("st");
      break;
    case "2":
      arr.push("nd");
      break;
    case "3":
      arr.push("nd");
      break;
    default:
      arr.push("th");
  }
  return arr.toString().replaceAll(",", "");
};
console.log(humanNumber(301));

/*

1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th

*/
