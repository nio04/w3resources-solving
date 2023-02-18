const input = undefined;

const getDataType = (input) => {
  if (typeof input === "string") return "string";
  else if (typeof input === "number") return "number";
  else if (Array.isArray(input)) return "array";
  else if (typeof input === "boolean") return "boolean";
  else if (typeof input === "object" && !Array.isArray(input) && input !== null)
    return "object";
  else if (typeof input === "function") return "function";
  else if (typeof input === "undefined") return "undefined";
  else return "could not verify";
};

console.log(getDataType(input));
