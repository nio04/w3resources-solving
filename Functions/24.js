const arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        // [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(bubbleSort(arr));
