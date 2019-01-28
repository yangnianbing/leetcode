/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (52.07%)
 * Total Accepted:    281.2K
 * Total Submissions: 540.1K
 * Testcase Example:  '3'
 *
 * 
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 * 
 * 
 * 
 * For example, given n = 3, a solution set is:
 * 
 * 
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * 
 *  ( ( ( ) ( ) ) )
 * ]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];
    dfs(result, '', n, n);
    function dfs(result, str, open, close){
        if(open > close || open < 0){
            return;
        }
        if(open === 0 && close === 0){
            result.push(str);
        }

        dfs(result, str + '(', open - 1, close);
        dfs(result, str + ')', open, close - 1);
    }
    return result;

};
