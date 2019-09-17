/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (33.11%)
 * Likes:    625
 * Dislikes: 380
 * Total Accepted:    179.5K
 * Total Submissions: 537.7K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 * 
 * Valid operators are +, -, *, /. Each operand may be an integer or another
 * expression.
 * 
 * Note:
 * 
 * 
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would
 * always evaluate to a result and there won't be any divide by zero
 * operation.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * Output: 22
 * Explanation: 
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 * 
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let opera = {'+':true,'-':true,'*': true, '/': true};
    for(let token of tokens){
        if(opera[token]){
            let arg2 = stack.pop();
            let arg1 = stack.pop();
            let newValue = 0;
            switch(token){
                case '+':
                    newValue = arg1 + arg2;
                    break;
                case '-':
                    newValue = arg1 - arg2;
                    break;
                case '*':
                    newValue = arg1 * arg2;
                    break;
                case '/':
                    newValue = arg1 / arg2;
                    newValue = newValue > 0 ? Math.floor(newValue) : Math.ceil(newValue);
                    break;
            }
            stack.push(newValue);
        }else{
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};


