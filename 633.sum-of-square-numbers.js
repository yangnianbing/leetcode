/*
 * @lc app=leetcode id=633 lang=javascript
 *
 * [633] Sum of Square Numbers
 */
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let sqrt = Math.floor(Math.sqrt(c));

    for(let i = sqrt; i >= 0; i--){
      let j = Math.sqrt(c - i * i)
      if(parseInt(j) === j){
        return true
      }
    }
    return false;
};


