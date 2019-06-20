/*
 * @lc app=leetcode id=976 lang=javascript
 *
 * [976] Largest Perimeter Triangle
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort((a, b) => a > b ? -1 : 1);
    
    for(let i = 0; i < A.length - 2; i++){
      for(let j = i + 1; j < A.length - 1; j++){
        for(let k = j + 1; k < A.length; k++){
          if(A[j] + A[k] > A[i]){
            return A[i] + A[j] + A[k];
          }
        }
      }
    }


    return 0;
};

