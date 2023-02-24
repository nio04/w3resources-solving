const getOtherFunc = (callBack) => {
  return callBack();
};

const printMe = () => {
  return "im from other function";
};

console.log(getOtherFunc(printMe));
