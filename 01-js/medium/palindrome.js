/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = "";
  for(let ch of str)
  {
    if (ch >= 'a' && ch <= 'z')
    {
      s += ch;
    }
    else if (ch >= 'A' && ch <= 'Z')
    {
      s += ch.toLowerCase();
    }
  }
  let i = 0, j = s.length - 1;
  while (i < j)
  {
    if (s[i].toLowerCase() != s[j].toLowerCase())
    {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
