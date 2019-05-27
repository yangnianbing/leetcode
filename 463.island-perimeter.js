/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let result = 0;
    for(let i = 0, len = grid.length; i < len; i++){
      for(let j = 0, width = grid[i].length; j < width; j++){
        if(grid[i][j] === 1){
          result += 4;
          if(j < width - 1 && grid[i][j+1] === 1){
            result -= 2;
          }
          if(i < len - 1 && grid[i+1][j] === 1){
            result -= 2;
          }
        }
      }
    }

    return result;
};



