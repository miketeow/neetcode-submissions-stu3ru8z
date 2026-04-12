class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
    let setNums = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!setNums.has(nums[i] - 1)) {
      let start = nums[i];
      let length = 1;
      while (setNums.has(start + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
    }
}
