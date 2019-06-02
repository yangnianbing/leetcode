/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  let targetValue = image[sr][sc];
  let h = image.length;
  let w = image[0].length;
  let walk = (image, r, c, targetValue, newColor) => {
    if(image[r][c] === targetValue){
      image[r][c] = newColor;
      if(r >= 1){
        walk(image, r - 1, c, targetValue, newColor);
      }
      if(c >= 1){
        walk(image, r, c - 1, targetValue, newColor);
      }
      if(r < h - 1){
        walk(image, r + 1, c, targetValue, newColor);
      }
      if(c < w - 1){
        walk(image, r, c + 1, targetValue, newColor);
      }
    }
  }
  if(targetValue != newColor){
    walk(image, sr, sc, targetValue, newColor);
  }
  return image;



};



