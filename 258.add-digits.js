/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 *
 * https://leetcode.com/problems/add-digits/description/
 *
 * algorithms
 * Easy (53.21%)
 * Total Accepted:    222.1K
 * Total Submissions: 417.5K
 * Testcase Example:  '38'
 *
 * Given a non-negative integer num, repeatedly add all its digits until the
 * result has only one digit.
 * 
 * Example:
 * 
 * 
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 * 
 * 
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num = num + '';
    while(num.length != 1){
        num = num.split('').reduce((a,b) => Number(a) + Number(b)) + '';
    }
    return Number(num);
};
