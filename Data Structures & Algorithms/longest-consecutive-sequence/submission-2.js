class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
         let currentSeq = 1;
  let result = 1;
  if (nums.length == 0) {
    return 0;
  }
  let sortedArr = nums.sort((a, b) => a - b);
  let anchor = sortedArr[0];
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] == anchor + 1) {
      currentSeq++;
    } else if (sortedArr[i] == anchor) {
      continue;
    } else {
      currentSeq = 1;
    }

    if (currentSeq > result) {
      result = currentSeq;
    }
    anchor = sortedArr[i];
  }
  return result;
    }
}
