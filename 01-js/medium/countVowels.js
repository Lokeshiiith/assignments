/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(char)
{
  return (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U');
}
function countVowels(str) {
  // Your code here
  let count = 0;
  for (let ch of str) {
    if (isVowel(ch)) {
      count++;
    }
  }
  return count;
  
}

module.exports = countVowels;