function setZero(array){
  let chosenOnes = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++){
      //if you find 0 value in an array, set all index numbers in same array to 0 value (inner loop)
      if(array[i][j] === 0 ) {
        chosenOnes.push([i, j]);
      }
    }
  }

  for (let i = 0; i < chosenOnes.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < array[j].length; k++) {
        array[chosenOnes[i][0]][k] = 0;
        array[j][chosenOnes[i][1]] = 0;
      }
    }
  }
  return array;
}

console.log(setZero([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));

//store col and rows into an array, then at the end loop through the array and change to 0
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