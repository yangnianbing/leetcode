/*
 * @lc app=leetcode id=405 lang=javascript
 *
 * [405] Convert a Number to Hexadecimal
 */
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if(num === 0){
    return '0';
  }
  num = num >= 0 ? num : Math.pow(2, 32) + num;
  let result = '';
  let strs = '0123456789abcdef'.split('');
  

  while(num > 0){
    let digit = num % 16;
    result = strs[digit] + result;
    num = parseInt(num / 16);
  }

  return result;
};

