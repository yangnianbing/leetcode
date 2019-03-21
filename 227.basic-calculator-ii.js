/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 *
 * https://leetcode.com/problems/basic-calculator-ii/description/
 *
 * algorithms
 * Medium (32.19%)
 * Total Accepted:    91.3K
 * Total Submissions: 283.6K
 * Testcase Example:  '"3+2*2"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 * 
 * The expression string contains only non-negative integers, +, -, *, /
 * operators and empty spaces  . The integer division should truncate toward
 * zero.
 * 
 * Example 1:
 * 
 * 
 * Input: "3+2*2"
 * Output: 7
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: " 3/2 "
 * Output: 1
 * 
 * Example 3:
 * 
 * 
 * Input: " 3+5 / 2 "
 * Output: 5
 * 
 * 
 * Note:
 * 
 * 
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    var stack = [];
    var current = 0;
    var sign = '+';

    var number = /[0-9]/;
    var space = /\s/;

    while(current < s.length){
        var char = s[current];

        if(space.test(char)){
            ++current
            continue;
        }

        if(number.test(char)){
            var value = '';
            while(number.test(char)){
                value += char;
                char = s[++current];
            }
            if(sign === '-' || sign === '+'){
                stack.push(sign + value);
            }else if(sign === '*'){
                stack.push(Number(stack.pop()) * Number(value));
            }else if(sign === '/'){
                stack.push(parseInt(Number(stack.pop()) / Number(value)));
            }
        }

        if(char === '+' || char === '-' || char === '*' || char === '/'){
            sign = char;
            current++;
        }
    }
    return stack.reduce((a, b) => Number(a) + Number(b));
};
