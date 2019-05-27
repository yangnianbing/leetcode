/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let lastOne = thisOne = -1;
  for(let i = 0; i < flowerbed.length; i++){
    if(flowerbed[i] === 1){
      thisOne = i;
      if(lastOne === -1){
        n -= Math.ceil((thisOne - 1) / 2)
      }else{
        n -= Math.ceil((thisOne - lastOne - 3) / 2)
      }
      lastOne = i;
    }
  }
  if(lastOne === thisOne && lastOne != flowerbed.length - 1){
    if(lastOne == -1){
      n -= Math.ceil((flowerbed.length)/2)
    }else{
      n -= Math.ceil((flowerbed.length - 2 - lastOne) / 2)
    }
    
  }

  return n <= 0;
};

canPlaceFlowers([0], 1)
