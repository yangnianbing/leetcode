/*
 * @lc app=leetcode id=367 lang=javascript
 *
 * [367] Valid Perfect Square
 *
 * https://leetcode.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (39.55%)
 * Total Accepted:    105.5K
 * Total Submissions: 266.4K
 * Testcase Example:  '16'
 *
 * Given a positive integer num, write a function which returns True if num is
 * a perfect square else False.
 * 
 * Note: Do not use any built-in library function such as sqrt.
 * 
 * Example 1:
 * 
 * 
 * 
 * Input: 16
 * Output: true
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 14
 * Output: false
 * 
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let lo = 1;
    let hi = num;
    
    if (num == 1) return true;
    
    while(lo < hi) {
        let mid = Math.floor(lo + (hi - lo)/2);
        if (mid*mid === num) return true;
        if (num > mid*mid) lo=mid+1;
        else hi=mid;
    }
    
    return false;
};

