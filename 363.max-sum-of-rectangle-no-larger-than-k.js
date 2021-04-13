/*
 * @lc app=leetcode id=363 lang=javascript
 *
 * [363] Max Sum of Rectangle No Larger Than K
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
  var maxSumSubArray = function(arr, k){
    let result = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++){
      let sum = 0;
      for(let j = i; j < arr.length; j++){
        sum += arr[j]
        if(sum <= k){
          result = Math.max(sum, result)
        }
      }
    }
    return result
  }

  let total = matrix.map(row => {
    return [...row]
  })

  for(let i = 1; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      total[i][j] += total[i - 1][j]
    }
  }

  let max = Number.MIN_SAFE_INTEGER
  for(let i = 0; i < matrix.length; i++){
    for(let j = i; j < matrix.length; j++){
      let arr = new Array(matrix[0].length)
      for(let k = 0; k < matrix[0].length; k++){
        arr[k] = i === 0 ? total[i][k] : (total[j][k] - total[i - 1][k])
      }
      max = Math.max(maxSumSubArray(arr, k), max)
    }
  }
  return max
};
// @lc code=end
/**
 * 最大子串和
 * a[0]....a[n]
 * 
 * dp[i]表示以a[i]结尾的最大子串和
 * dp[0] = a[0]
 * dp[1] = a[0] > 0 ? (a[0] + a[1]) : a[1]
 * dp[i] = dp[i - 1] > 0 ? (dp[i - 1] + a[i]) : a[i]
 * Math.max(...dp)即为最大子串和
 */