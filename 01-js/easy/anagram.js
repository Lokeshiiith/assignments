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
  str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
  str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Make array for both strings and fill it with 0
  let charCount = new Array(256).fill(0);

  for (let i = 0; i < str1.length; i++) {
    
    charCount[str1.charCodeAt(i)]++;
    charCount[str2.charCodeAt(i)]--;
  }
  for (let i = 0; i < 256; i++) {
    if (charCount[i] != 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
