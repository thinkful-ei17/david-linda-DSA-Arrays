function maxSum(array) {

  if(!array.length){
    return 0
  }
  
  for (i = 0; i < array.length; i++) {
    let currentSum = 0;
    let totalSum = Math.max(...array);
    console.log('what is totalSum at start', totalSum);
    currentSum = currentSum + array[i];
      if(currentSum > totalSum) {
        console.log('say hi');
        totalSum += currentSum;
      }
      console.log('what is currentSum', currentSum);
      console.log('what is totalSum', totalSum);
      return totalSum + maxSum(array.slice(1))
  }
}

console.log(maxSum([-1, -3, 10, 10, -10]));

/* idea

Add all numbers in array = store in new array
reduce by 1 index
Add all numbers in array = store in new array
reduce by 1 index
....
continue on until array empty;
then compare numbers in array - Math.max?


/* issues when a negative number is between two positives sort of
function maxSum(array) {
  let currentSum = 0;
  let totalSum = Math.max(...array);
  for (i = 0; i < array.length; i++) {
    currentSum = currentSum + array[i];
    if(currentSum > totalSum) {
      totalSum = currentSum;
    }
  }

  return totalSum;
}

*/

/* 
Input: [4,6,-3,5,-2,1]
length is 
loop 0
[0][1] = 10
[0][1][2] = 7
[0][1][2][3] = 12 (THIS IS WHAT WE EXPECT AS OUTPUT) = 4, 6, -3, 5
[0][1][2][3][4] = 10
[0][1][2][3][4][5] = 11

loop 1
[1] = 6
[1][2] = 3
[1][2][3] = 8
[1][2][3][4] = 6
[1][2][3][4][5] = 7

[2] = -3
[2][3] = 2
[2][3][4] = 0
[2][3][4][5] = 1

[3] = 5
[3][4] = 3
[3][4][5] = 4

[4] = -2
[4][5] = -1

[5] = 1
*/



/*
Max sum in the array
You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

Input: [4,6,-3,5,-2,1]
Output: 12

*/