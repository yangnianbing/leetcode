/*
 * @lc app=leetcode id=970 lang=javascript
 *
 * [970] Powerful Integers
 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
 
  let result = new Set();


  for(let i = 0; Math.pow(x, i) <= bound &&  i < 20; i++){
    for(let j = 0; Math.pow(y, j) <= bound && j < 20; j++){
      let v = Math.pow(x, i) + Math.pow(y, j);
      if(v <= bound){
        result.add(v);
      }
    }
  }
  return Array.from(result);
};



