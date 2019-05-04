/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 *
 * https://leetcode.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (30.23%)
 * Total Accepted:    46.6K
 * Total Submissions: 154K
 * Testcase Example:  '3'
 *
 * Find the n^th digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8,
 * 9, 10, 11, ... 
 * 
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n <
 * 2^31).
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 3
 * 
 * Output:
 * 3
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 11
 * 
 * Output:
 * 0
 * 
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a
 * 0, which is part of the number 10.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

 /**
  * 将数字进行分组， 1-9， 10-99， 100-999...
  * 每一组数中数字包含的位数定义为numOfDigits
  * 每一组第一个数定义为first
  * 
  * 第一组总位数为9*1*1
  * 第二组总位数为9 * 10 * 2
  * 第三组总位数为9 * 100 * 3
  * 
  * 首先看看第n位落在哪一组数中
  * 然后再看落在该组的哪一个数中
  * 最后确定落在该数的哪一位上
  */
var findNthDigit = function(n) {
    n--;
    let first = 1;
    let numOfDigits = 1;

    while(n / 9 / first / numOfDigits >= 1){
      n -= 9 * first * numOfDigits;
      numOfDigits++;
      first *= 10;
    }

    return Number((first + parseInt(n / numOfDigits) + '').charAt(n % numOfDigits))
};

