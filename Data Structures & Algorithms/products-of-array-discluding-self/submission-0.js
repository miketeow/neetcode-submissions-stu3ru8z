class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         let result = [];
  let output = 0;
  let firstPart = 0;
  let secondPart = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i == 0) {
      output = nums.slice(1).reduce((total, num) => total * num);
      result.push(output);
    } else if (i == nums.length - 1) {
      output = nums.slice(0, i).reduce((total, num) => total * num);
      result.push(output);

      break;
    } else {
      firstPart = nums.slice(0, i).reduce((total, num) => total * num);
      secondPart = nums
        .slice(i + 1, nums.length)
        .reduce((total, num) => total * num);

      output = firstPart * secondPart;
      result.push(output);
    }
  }
  return result;
    }
}
