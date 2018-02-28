function products(arr) {
  let newArr = [];
  let finalArr = [];
  for (let i=0; i<arr.length; i++) {
    let product = 1;
    newArr = [...arr.slice(0,i), ...arr.slice(i+1)];
    for (let j=0; j<newArr.length; j++) {
      product = product * newArr[j];
    }
    finalArr.push(product);
  }
  return finalArr;
}

console.log(products([1,3,9,4]));

/*
Products
Given an array of numbers, write an algorithm to find out the products of every number, except the one at that index.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
*/
