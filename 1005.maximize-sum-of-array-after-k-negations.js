/*
 * @lc app=leetcode id=1005 lang=javascript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    A.sort((a, b) => a < b ? -1 : 1);


    for(let i = 0; K > 0 && i < A.length && A[i] < 0; ++i, --K){
      A[i] = 0 - A[i];
    }

    let result = 0,
      min = 100;
    for(let i of A){
      result += i;
      min = Math.min(min, i);
    }
    return result - (K % 2) * min * 2


};

