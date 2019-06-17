/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {   
  let haveNoFreshOrange = (grid) => {
    return grid.every(row => row.every(cell => cell !== 1));
  }
  
  let rotten = [];
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
      if(grid[i][j] === 2){
        rotten.push([i, j]);
      }
    }
  }
  if(rotten.length === 0){
    return haveNoFreshOrange(grid) ? 0 : -1;
  }
  
  let time = 0;
  while(rotten.length !== 0){
    let newRotten = [];
    for(let [i,j] of rotten){
      if(i > 0 && grid[i - 1][j] === 1){
        newRotten.push([i-1, j]);
        grid[i - 1][j] = 2;
      }
      if(j > 0 && grid[i][j - 1] === 1){
        newRotten.push([i, j - 1]);
        grid[i][j - 1] = 2;
      }
      if(i < grid.length - 1 && grid[i+1][j] === 1){
        newRotten.push([i+1, j]);
        grid[i+1][j] = 2;
      }
      if(j < grid[0].length - 1 && grid[i][j+1] === 1){
        newRotten.push([i, j + 1]);
        grid[i][j+1] = 2;
      }
    }
    rotten = newRotten;
    time++;
  }

  return haveNoFreshOrange(grid) ? --time : -1;

};


