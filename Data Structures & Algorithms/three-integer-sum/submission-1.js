class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
   let result = [];
  let sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    let left = i + 1;
    let right = sortedArr.length - 1;
    if (i > 0) {
      if (sortedArr[i] == sortedArr[i - 1]) {
        continue;
      }
    }
    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        left++;
        while (sortedArr[left] == sortedArr[left - 1]) {
          left++;
        }
      }
    }
  }

  return result;
    }
}
