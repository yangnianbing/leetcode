/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 *
 * https://leetcode.com/problems/reverse-words-in-a-string/description/
 *
 * algorithms
 * Medium (17.55%)
 * Likes:    650
 * Dislikes: 2415
 * Total Accepted:    310.3K
 * Total Submissions: 1.7M
 * Testcase Example:  '"the sky is blue"'
 *
 * Given an input string, reverse the string word by word.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "  hello world!  "
 * Output: "world! hello"
 * Explanation: Your reversed string should not contain leading or trailing
 * spaces.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "a good   example"
 * Output: "example good a"
 * Explanation: You need to reduce multiple spaces between two words to a
 * single space in the reversed string.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * A word is defined as a sequence of non-space characters.
 * Input string may contain leading or trailing spaces. However, your reversed
 * string should not contain leading or trailing spaces.
 * You need to reduce multiple spaces between two words to a single space in
 * the reversed string.
 * 
 * 
 * 
 * 
 * Follow up:
 * 
 * For C programmers, try to solve it in-place in O(1) extra space.
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let chars = s.trim().split('').reverse();
    let SPACE = ' ';
    let start = 0;
    let end = 0;
    for(let i = 0; i < chars.length; i++){
        if(chars[i] !== SPACE){
            start = end = i;
            while(++i < chars.length && chars[i] !== SPACE ){
                end = i;
            }
            i--;
            while(start < end){
                [chars[start], chars[end]] = [chars[end], chars[start]];
                start++;
                end--;
            }
        }else {
            while(chars[i+1] === SPACE){
                chars.splice(i+1, 1)
            }
        }
    }

    return chars.join('')
};


