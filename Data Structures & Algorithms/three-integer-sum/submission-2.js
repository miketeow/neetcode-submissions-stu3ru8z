class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
     let result = [];
  let sortedArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; i++) {
    // early exit, mathematically impossible to find sum equal 0
    if (sortedArr[i] > 0) break;

    // skip duplicate
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;

    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        // found valid triplets
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        left++;

        while (left < right && sortedArr[left] === sortedArr[left - 1]) {
          left++;
        }
      }
    }
  }

  return result;
    }
}
