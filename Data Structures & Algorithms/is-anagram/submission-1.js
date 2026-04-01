class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length){
            return false
        }

       const count = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
        }

        for (let j = 0; j < t.length; j++) {
            if (count[t.charCodeAt(j) - 97] === 0) return false;
            count[t.charCodeAt(j) - 97]--;
            }
            return true;
        }
}
