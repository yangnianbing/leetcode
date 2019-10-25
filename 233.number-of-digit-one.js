/*
 * @lc app=leetcode id=233 lang=javascript
 *
 * [233] Number of Digit One
 *
 * https://leetcode.com/problems/number-of-digit-one/description/
 *
 * algorithms
 * Hard (30.56%)
 * Likes:    202
 * Dislikes: 508
 * Total Accepted:    43.9K
 * Total Submissions: 142.7K
 * Testcase Example:  '13'
 *
 * Given an integer n, count the total number of digit 1 appearing in all
 * non-negative integers less than or equal to n.
 * 
 * Example:
 * 
 * 
 * Input: 13
 * Output: 6 
 * Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let counts = 0;
    let m  = r = 1;

    while(n > 0){

        counts += Math.floor((n + 8) / 10) * m + (n % 10 === 1 ? r : 0);
        r += n % 10 * m;
        m *= 10;
        n = Math.floor(n / 10)
    }
    
    return counts;
};

// @lc code=end

