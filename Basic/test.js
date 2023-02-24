const globalVar = "i am global";

const firstFunc = function () {
  const localVarFirst = "i am first local variable";
  secondFunc();

  function secondFunc() {
    const localVarSecond = "i am second local variable";
    console.log(localVarFirst)
    thirdFunc();
  }
}

const thirdFunc = function () {
  console.log(globalVar)
  // console.log(localVarFirst)
}
firstFunc();
thirdFunc();
