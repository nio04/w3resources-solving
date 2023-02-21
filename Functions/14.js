const inputAmount = 49;
const coinAvailable = [25, 10, 5, 2, 1];

const getCoins = (input, amount) => {
  const [twentyfive, ten, five, two, one] = amount;
  let twentyFiveDiv;
  let twentyFiveMod;
  let tenDiv; 
  let tenMod; 
  let fiveDiv;
  let fiveMod;
  let twoDiv;
  let twoMod;
  let oneDiv;

  // * 25
  if (input / twentyfive > 1) {
    twentyFiveDiv = Math.trunc(input / twentyfive);
    twentyFiveMod = input % twentyfive;
  }

  // * 10
  if (input / ten > 1) {
    if (twentyFiveMod === undefined) {
      tenDiv = Math.trunc(input / ten);
      tenMod = input % 10;
    } else {
      tenDiv = Math.trunc(twentyFiveMod / ten);
      tenMod = twentyFiveMod % ten;
    }
  }

  // * 5
  if (input / five > 1) {
    if (tenMod === undefined) {
      fiveDiv = Math.trunc(input / five);
      fiveMod = input % five;
    } else {
      if (tenMod >= five) fiveDiv = Math.trunc(tenMod / five);
      else fiveDiv = 0;
      fiveMod = tenMod % five;
    }
  }

  // * 2
  if (input / two >= 1) {
    if (fiveMod === undefined) {
      twoDiv = Math.trunc(input / two);
      twoMod = input % two;
    } else {
      if (fiveMod >= two || tenMod >= two) twoDiv = Math.trunc(fiveMod / two);
      else twoDiv = 0;
      twoMod = fiveMod % two;
    }
  }
// * 1
  if (twoMod === undefined) {
    oneDiv = 1;
  } else {
    oneDiv = twoMod / one;
  }

  const finalRes = [];
  const allNum = [twentyFiveDiv, tenDiv, fiveDiv, twoDiv, oneDiv];

  for (let i = 0; i < allNum.length; i += 1) {
    if (allNum[i] > 0) {
      for (let j = 1; j <= allNum[i]; j += 1) {
        finalRes.push(amount[i]);
      }
    }
  }
  if (twentyFiveMod === 0) return finalRes;
  // return `Input: ${input} --> 25: ${twentyFiveDiv}, 10: ${tenDiv}, 5: ${fiveDiv}, 2: ${twoDiv}, 1: ${oneDiv}`;
  if (tenMod === 0) return finalRes;
  // return `Input: ${input} --> 25: ${twentyFiveDiv}, 10: ${tenDiv}, 5: ${fiveDiv}, 2: ${twoDiv}, 1: ${oneDiv}`;
  if (fiveMod === 0) return finalRes;
  // return `Input: ${input} --> 25: ${twentyFiveDiv}, 10: ${tenDiv}, 5: ${fiveDiv}, 2: ${twoDiv}, 1: ${oneDiv}`;
  if (twoMod === 0) return finalRes;
  // return `Input: ${input} --> 25: ${twentyFiveDiv}, 10: ${tenDiv}, 5: ${fiveDiv}, 2: ${twoDiv}, 1: ${oneDiv}`;
  if (oneDiv === 1) return finalRes;
  // return `Input: ${input} --> 25: ${twentyFiveDiv}, 10: ${tenDiv}, 5: ${fiveDiv}, 2: ${twoDiv}, 1: ${oneDiv}`;
};

console.log(getCoins(inputAmount, coinAvailable));
