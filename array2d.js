function setZero(array){
  console.log('what is length', array.length);
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++){
      console.log('i am inner loop');
      //if you find 0 value in an array, set all index numbers in same array to 0 value (inner loop)
      if(array[i][j] != 0 ) {
        array[i][j] = 0;
      }
    }
    console.log('outer loop ran');
  }
  return array
}

console.log(setZero([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));


/*
2D array
Write an algorithm which searches through a 2D array, and whenever it finds a zero should set the entire row and column to zero.

if you find 0 value in an array, set all index numbers in same array to 0 value (inner loop)
AND set the same index number (where 0 value was found) in other arrays to 0 at end of (larger loop)

search through each index value if = 0; then all index number values assigned new value of 0

Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];

Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];
*/