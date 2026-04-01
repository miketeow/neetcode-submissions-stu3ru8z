class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        if (nums.length == 2) {
            result = [nums[0], nums[1]];
        }
        
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    result = [i, j];
                } 
            }
        }
        
        return result;
    }
}
