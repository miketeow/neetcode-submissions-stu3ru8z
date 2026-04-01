class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (const n of nums) {
            if (map.has(n)) {
            map.set(n, map.get(n) + 1);
            } else {
            map.set(n, 1);
            }
        }

        const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
        return sorted.slice(0, k).map((entry) => entry[0]);
    }
}
