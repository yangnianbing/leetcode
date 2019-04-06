/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 *
 * https://leetcode.com/problems/ugly-number/description/
 *
 * algorithms
 * Easy (40.44%)
 * Total Accepted:    151.7K
 * Total Submissions: 374.8K
 * Testcase Example:  '6'
 *
 * Write a program to check whether a given number is an ugly number.
 * 
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 * 
 * Example 1:
 * 
 * 
 * Input: 6
 * Output: true
 * Explanation: 6 = 2 × 3
 * 
 * Example 2:
 * 
 * 
 * Input: 8
 * Output: true
 * Explanation: 8 = 2 × 2 × 2
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 14
 * Output: false 
 * Explanation: 14 is not ugly since it includes another prime factor 7.
 * 
 * 
 * Note:
 * 
 * 
 * 1 is typically treated as an ugly number.
 * Input is within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    let factors = [2, 3, 5];
    for(let i of factors){
        while(num % i === 0 && num){
            num /= i;
        }
    }
    return num === 1;
};

