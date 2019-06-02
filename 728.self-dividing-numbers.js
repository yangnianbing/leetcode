/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];

    for(let i = left; i <= right; i++){
      let isSelfDiv = true;
      let iStr = String(i);
      for(let j = 0; j < iStr.length; j++){
        let c = iStr.charAt(j);
        if(c === '0' || i % c !== 0){
          isSelfDiv = false;
          break;
        }
      }
      if(isSelfDiv){
        result.push(i);
      }
    }

    return result;
};

