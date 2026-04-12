class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let result = new Array(nums.length).fill(1);
        let postfix = 1;

        for (let i = 1; i < nums.length; i++) {
            result[i] = nums[i - 1] * result[i - 1];
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] = result[j] * postfix;
            postfix *= nums[j];
        }

        return result;

 
    }
}
