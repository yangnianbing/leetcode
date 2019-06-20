/*
 * @lc app=leetcode id=985 lang=javascript
 *
 * [985] Sum of Even Numbers After Queries
 */
/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let evenTotal = 0;

    A.forEach((a, index) => {
      if(a % 2 === 0){
        evenTotal += a;
      }
    })

    let result = new Array(queries.length);

    queries.forEach((query, index) => {
      let oldValue = A[query[1]];
      let newValue = oldValue + query[0];
      A[query[1]] = newValue;
      if(newValue % 2 === 0){
        evenTotal += newValue;
      }
      if(oldValue % 2 === 0){
        evenTotal -= oldValue;
      }
      result[index] = evenTotal;
    })

    return result;

};

