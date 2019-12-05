/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 *
 * https://leetcode.com/problems/remove-duplicate-letters/description/
 *
 * algorithms
 * Hard (33.24%)
 * Likes:    957
 * Dislikes: 90
 * Total Accepted:    66K
 * Total Submissions: 195.3K
 * Testcase Example:  '"bcabc"'
 *
 * Given a string which contains only lowercase letters, remove duplicate
 * letters so that every letter appears once and only once. You must make sure
 * your result is the smallest in lexicographical order among all possible
 * results.
 * 
 * Example 1:
 * 
 * 
 * Input: "bcabc"
 * Output: "abc"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbacdcbc"
 * Output: "acdb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let stack = [];

    let c = null;
    for(let i = 0; i < s.length; i++){
        c = s.charAt(i);
        if(stack.indexOf(c) != -1){
            continue;
        }
        while(stack.length > 0 && c < stack[stack.length - 1] && s.indexOf(stack[stack.length - 1], i) != -1){
            stack.pop();
        }
        stack.push(c);
    }
    return stack.join('');
};
// @lc code=end

