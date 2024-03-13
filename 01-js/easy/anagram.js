/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if both strings are of same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Make array for both strings and fill it with 0
  let arr1 = Array(256).fill(0);
  let arr2 = Array(256).fill(0);

  for (let i = 0; i < str1.length; i++) {
    arr1[str1.charCodeAt(i)]++;
    arr2[str2.charCodeAt(i)]++;
  }
  if(arr1.toString() !== arr2.toString()) {
    return false;
  }
  return true;
}

module.exports = isAnagram;
