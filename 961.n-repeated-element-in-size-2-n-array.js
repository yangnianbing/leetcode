/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = {};
    for(let i = 0; i < A.length; i++){
      if(map[A[i]]){
        return A[i]
      }
      map[A[i]] = 1;
    }
};

