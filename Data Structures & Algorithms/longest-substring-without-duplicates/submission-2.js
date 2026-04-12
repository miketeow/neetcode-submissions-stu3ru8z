class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
     let longestSub = 0;
  let left = 0;
  let existChar = new Set();

  for (let right = 0; right < s.length; right++) {
    while (existChar.has(s[right])) {
      existChar.delete(s[left]);
      left++;
    }

    existChar.add(s[right]);

    longestSub = Math.max(longestSub, right - left + 1);
  }

  return longestSub;
    }
}
