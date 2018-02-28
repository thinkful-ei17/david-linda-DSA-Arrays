function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr.sort((a, b) => a-b);
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

/*
Merge Arrays
Imagine you have two arrays which have already been sorted. Write an algorithm to merge the two arrays into a single array, which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/

// [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// [3, 6, 8, 11] [2, 3, 5, 8, 9, 10]
// [3, 6, 8, 11] [3, 5, 8, 9, 10]
// [6, 8, 11] [5, 8, 9, 10]
// [1, 2, 3, 3, 5]