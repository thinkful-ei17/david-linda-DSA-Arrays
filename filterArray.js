function filterArray(array) {
  if(!array.length){
    return []
  }
  if(array[0] > 5) {
    return [array[0], ...filterArray(array.slice(1))]
  }

  return filterArray(array.slice(1));

}

//we want function to take an array of numbers and filter out any numbers less than 5 w/o using .filter method

console.log(filterArray([3, 2, 1, 20, 100, 1000, 0, -3.5]));

/*
Filtering an array
Imagine you have an array of numbers. Write an algorithm to remove all numbers less than five from the array. Don't use array's built-in .filter method here; write the algorithm from scratch.
*/