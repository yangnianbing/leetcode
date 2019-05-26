/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    if(!M || M.length === 0){
      return [];
    }
    let steps = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, -1], [1, 1], [-1, 1], [-1, -1]];
    
    let walk = (node, step) => {
      return [node[0] + step[0], node[1] + step[1]];
    }

    let h = M.length;
    let w = M[0].length;

    let result = [];
    for(let i = 0; i < h; i++){
      for(let j = 0; j < w; j++){
        let count = 1;
        let sum = M[i][j];
        for(let k = 0; k < steps.length; k++){
          let neighbor = walk([i, j], steps[k]);
          if(neighbor[0] >= 0 && neighbor[0] <= h - 1 && neighbor[1] >= 0 && neighbor[1] <= w - 1){
            count++;
            sum += M[neighbor[0]][neighbor[1]];
          }
        }
        if(!result[i]){
          result[i] = [];
        }
        result[i][j] = Math.floor(sum / count);
      }
    }

    return result;

};


