/*
 * @lc app=leetcode id=447 lang=javascript
 *
 * [447] Number of Boomerangs
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let n = points.length,
      count = 0;

    if(n === 0){
      return 0;
    }

    for(let i = 0; i < n; i++){
      let map = {};
      for(let j = 0; j < n; j++){
        let distance = countDistance(points[i], points[j]);
        if(map[distance]){
          let num = map[distance] * 2;
          count += num;
          map[distance] = map[distance] + 1;
        }else{
          map[distance] = 1;
        }
      }
    }

    return count;
};

function countDistance(a, b){
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}


numberOfBoomerangs([[0,0],[1,0],[-1,0],[0,1],[0,-1]]);
