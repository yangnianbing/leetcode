/*
 * @lc app=leetcode id=441 lang=javascript
 *
 * [441] Arranging Coins
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  
  for(let i = 0; i < Number.MAX_VALUE; i++){
    n = n - i - 1;
    if(n < 0){
      return i ;
    }else if(n === 0){
      return i + 1
    } 
  }
};

