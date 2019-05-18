/*
 * @lc app=leetcode id=504 lang=javascript
 *
 * [504] Base 7
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7_ = function(num) {
    return Number(num).toString(7)
};

var convertToBase7 = function(num){
  let result = '';
  
  if(num === 0){
    return '0';
  }
  let isNegative = num < 0 ? true : false
  num = Math.abs(num);
  while(num != 0){
    result = num % 7 + result;
    num = (num - num % 7) / 7;
  }

  return isNegative ?  '-' + result : result;
}

