/*
 * @lc app=leetcode id=415 lang=javascript
 *
 * [415] Add Strings
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = '';
  let carry = 0;

  for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry == 1; i--, j--){
    let x = i < 0 ? 0 : Number(num1.charAt(i));
    let y = j < 0 ? 0 : Number(num2.charAt(j));
    result = (x + y + carry) % 10 + result;
    carry = parseInt((x + y + carry) / 10)
  }
  
  return result;

};


addStrings('1', '9');
