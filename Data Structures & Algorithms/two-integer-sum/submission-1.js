class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for (let index = 0; index < nums.length; index++) {
            const complement = target - nums[index];
                if (map.has(complement)) {
                    return [map.get(complement), index];
                } else {
                    map.set(nums[index], index);
                }
            }
        return [];
    }
}
