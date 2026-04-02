class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
    }
}

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // numeric 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }

  return true;
};
