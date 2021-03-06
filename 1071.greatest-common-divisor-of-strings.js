/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 *
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
 *
 * algorithms
 * Easy (51.53%)
 * Likes:    45
 * Dislikes: 17
 * Total Accepted:    4.3K
 * Total Submissions: 8.3K
 * Testcase Example:  '"ABCABC"\n"ABC"'
 *
 * For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T
 * concatenated with itself 1 or more times)
 * 
 * Return the largest string X such that X divides str1 and X divides str2.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: str1 = "ABCABC", str2 = "ABC"
 * Output: "ABC"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: str1 = "ABABAB", str2 = "ABAB"
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: str1 = "LEET", str2 = "CODE"
 * Output: ""
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= str1.length <= 1000
 * 1 <= str2.length <= 1000
 * str1[i] and str2[i] are English uppercase letters.
 * 
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings1 = function(str1, str2) {
    let [longStr, shortStr] = str1.length > str2.length ? [str1, str2] : [str2, str1];

    let longStrLen = longStr.length;
    let shortStrLen = shortStr.length;
   
    for(let resultLen = shortStrLen; resultLen > 0; resultLen--){
        if(shortStrLen % resultLen === 0 && longStrLen % resultLen === 0){
            let subStr = longStr.substring(0, resultLen);
            if(subStr.repeat(longStrLen / resultLen) === longStr
            && subStr.repeat(shortStrLen / resultLen) === shortStr){
                return subStr
            }
        }
    }
    return '';
};


