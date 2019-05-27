/*
 * @lc app=leetcode id=475 lang=javascript
 *
 * [475] Heaters
 */
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {

  houses = houses.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
  heaters = heaters.sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
  
  let i = j = result = 0;

  while(i < houses.length){
    while(j < heaters.length - 1 
      && Math.abs(heaters[j + 1] - houses[i]) <= Math.abs(heaters[j] - houses[i])){
        j++;
      }
    result = Math.max(result, Math.abs(heaters[j] - houses[i]));
    i++;
  }

  return result;

};

