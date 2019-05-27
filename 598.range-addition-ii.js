/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  if(!ops || ops.length === 0){
    return m * n;
  }
    let x = [];
    let y = [];

    ops.forEach(op => {
      x.push(op[0])
      y.push(op[1])
    })

    return Math.min(...x) * Math.min(...y);
};

