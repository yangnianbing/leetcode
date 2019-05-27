/*
 * @lc app=leetcode id=492 lang=javascript
 *
 * [492] Construct the Rectangle
 */
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
  let i = parseInt(Math.sqrt(area));

  while(area % i !== 0){
    i--;
  }

  return [area / i, i];
};

