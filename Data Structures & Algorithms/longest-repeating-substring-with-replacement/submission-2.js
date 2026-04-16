class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
     let left = 0;
  let longestSeq = 0;
  let maxFreq = 0;
  const freqMap = {};

  // build the first window
  for (let right = 0; right < s.length; right++) {
    freqMap[s[right]] = (freqMap[s[right]] || 0) + 1;
    // invalid state
    maxFreq = Math.max(maxFreq, freqMap[s[right]]);
    while (right - left + 1 - maxFreq > k) {
      freqMap[s[left]] = (freqMap[s[left]] || 0) - 1;
      left++;
    }

    longestSeq = Math.max(longestSeq, right - left + 1);
  }

  return longestSeq;
    }
}
