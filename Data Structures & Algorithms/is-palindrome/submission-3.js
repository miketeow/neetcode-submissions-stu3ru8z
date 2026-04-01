class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         const cleaned = s.replace(/[^a-z0-9]/gi, "");
        let t = cleaned.split(" ").join("").toLowerCase();
        for (let i = 0; i < t.length; i++) {
            if (t[i] !== t[t.length - i - 1]) {
            return false;
            }
        }
        return true;
    }
}
