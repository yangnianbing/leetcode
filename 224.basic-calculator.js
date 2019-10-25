/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (33.66%)
 * Likes:    961
 * Dislikes: 105
 * Total Accepted:    127.3K
 * Total Submissions: 370K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 * 
 * Example 1:
 * 
 * 
 * Input: "1 + 1"
 * Output: 2
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 2-1 + 2 "
 * Output: 3
 * 
 * Example 3:
 * 
 * 
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let result = 0;
    let param = 0;
    let sign = 1;
    let numReg = /^\d$/;
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
       if(c === '('){
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
       }else if(c === ')'){
           result += sign * param;
           param = 0;
           result *= stack.pop();
           result += stack.pop();
       }else if(numReg.test(c)){
           param = param * 10 + Number(c);
       }else if(c === '+'){
           result += sign * param;
           param = 0;
           sign = 1;
       }else if(c === '-'){
           result += sign * param;
           param = 0;
           sign = -1;
       }
    }

    return result + sign * param;
};

// @lc code=end\
