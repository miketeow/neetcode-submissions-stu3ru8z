class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (const str of strs) {
            encoded += str.length + "#" + str;
        }
        console.log("The encoded message is: " + encoded);
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         let result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
            j++;
            }
            let length = Number(str.slice(i, j));
        
            let word = str.slice(j + 1, length + j + 1);
            result.push(word);
            i = j + 1 + length;
        }
        
        return result;
    }
}
