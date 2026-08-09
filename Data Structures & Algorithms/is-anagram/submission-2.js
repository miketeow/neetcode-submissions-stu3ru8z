class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     if (s.length !== t.length) return false;

  const count = new Map();
  for (let i = 0; i < s.length; i++){
    const char = s[i]
    count.set(char,(count.get(char)|| 0) + 1)
  }
  for (let j = 0; j < t.length; j++) {
    const char = t[j]
    if (!count.get(char)) return false;
    count.set(char,count.get(char) - 1)
  }
  return true;
  }
}
