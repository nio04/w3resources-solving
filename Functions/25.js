const input = [ "Australia", "Germany", "United States of America" ];

const getLongCountry = input => {
  let long = input[ 0 ];
  
  for (let i = 1; i < input.length; i += 1){
    if (long < input[ i ]) long = input[ i ];
  }
  return long;
}
console.log(getLongCountry(input));
