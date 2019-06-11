/*
 * @lc app=leetcode id=1042 lang=javascript
 *
 * [1042] Flower Planting With No Adjacent
 */
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    let map = {};
    for(let i = 0; i < N; i++){
      map[i + 1] = [];
    }
    paths.forEach(path => {
      map[path[0]].push(path[1]);
      map[path[1]].push(path[0]);
    })

    let result = [];

    for(let i = 1; i <= N; i++){
      let types = new Array(5).fill(1);
      let neighbors = map[i];
      for(let j of neighbors){
        if(result[j-1]){
          types[result[j-1]] = 0;
        }
      }
      for(let k = 1; k < 5; k++){
        if(types[k] === 1){
          result[i-1] = k;
          break;
        }
      }
    }

    return result;
};

