const input = "nishatslam3108@gmail.com";

const hideEmail = input => {
  const split = input.split("@");
  const first = split[0];
  let special = '';

  if (first.length > 3) {
    for (let i = 0; i <first.length; i +=1){
      if (i < 3) {
        special += first[i];
      } else {
        special += ".";
      }
    }
  }

  const dotCheck = Array.from(special);
  let counter = 0;

  for (let i = 0; i < special.length; i += 1){
    if (dotCheck[i] === ".") counter += 1;
  }

  if (counter > 4) {
    dotCheck.splice(6, counter);
  }

  return `${dotCheck.toString().replaceAll(",","")}@${split[1]}`;
}

console.log(hideEmail(input))
