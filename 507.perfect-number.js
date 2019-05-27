/*
 * @lc app=leetcode id=507 lang=javascript
 *
 * [507] Perfect Number
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber1 = function(num) {
    let result = 0;

    if(num === 0){
      return false;
    }
    for(let i = 1; i < num; i++){
      if(num % i === 0){
        result += i;
      }
      if(result > num){
        return false;
      }
    }

    return result === num;
};


var checkPerfectNumber = function(num){
  return [6, 28, 496, 8128, 33550336].indexOf(num) !== -1
}

