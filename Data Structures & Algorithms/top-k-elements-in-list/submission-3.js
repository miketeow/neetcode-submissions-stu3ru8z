class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => [])
        
        for (const n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        
        for (const m in count) {
            freq[count[m]].push(m)
        }
        
        const res = [];
        for (let i = freq.length - 1; i > 0 && res.length < k; i--) {
            for (const n of freq[i]) {
            res.push(Number(n));
            }
        }
        return res;
    }
}
