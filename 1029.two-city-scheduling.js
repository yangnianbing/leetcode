/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */
/**
 * @param {number[][]} costs
 * @return {number}
 */
//飞A到飞B的差价进行排序，差价最大的省得最多
var twoCitySchedCost = function(costs) {
  costs.sort((a, b) => {
    return a[0] - a[1] - (b[0] - b[1]) > 0 ? 1 : -1;
  })

  let result = 0;
  let n = costs.length / 2;
  for(let i = 0; i < 2*n; i++){
    if(i < n){
      result += costs[i][0]
    }else{
      result += costs[i][1]
    }
  }

  return result;
};

