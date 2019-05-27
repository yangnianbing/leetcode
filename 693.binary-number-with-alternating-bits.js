/*
 * @lc app=leetcode id=693 lang=javascript
 *
 * [693] Binary Number with Alternating Bits
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let binStr = Number(n).toString(2);

    for(let i = 0; i < binStr.length - 1; i++){
      if(binStr.charAt(i) === binStr.charAt(i+1)){
        return false;
      }
    }
    return true;
};


