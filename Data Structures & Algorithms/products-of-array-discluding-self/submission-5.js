class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let result = [];
  let prefixArr = new Array(nums.length).fill(1);
  let postfixArr = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      continue;
    } else {
      prefixArr[i] = nums[i - 1] * prefixArr[i - 1];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      continue;
    } else {
      postfixArr[i] = nums[i + 1] * postfixArr[i + 1];
    }
  }
  result = prefixArr.map((num, idx) => num * postfixArr[idx]);

  return result;

 
    }
}
