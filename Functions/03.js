/*
all kind of string combo generator -> dog => d, do, dog, o, og, g
*/
const input = "dogo";
// dogo, dog, do  -> last["o"] omit
// ogo -> first[d] omit
// go -> firstTWO[do] omit
const arr = Array.from(input)
let storeSingle = "";
let storeFull = "";
let storeAllSub = "";

// ! storeSingle
for (let i = 0; i < arr.length; i += 1){
  storeSingle += arr[i] + " , ";
}

// ! storeAllSub
for (let i = 0; i < arr.length; i += 1){
  let temp = input;
  temp.replace(arr[i], "");
  storeAllSub += temp + " , "
}

// console.log(input, ",", storeSingle, storeAllSub);
