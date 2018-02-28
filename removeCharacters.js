function removeChars(str, chars) {
  let charsArr = [...chars];
  let newStr = str;
  console.log(charsArr);
  for (let i=0; i<charsArr.length; i++) {
    newStr = newStr.replace(`${charsArr[i]}`, '');
  }
  return newStr;
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

/*
Remove Characters
Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/