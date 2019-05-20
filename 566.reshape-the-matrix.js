/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    if(!nums || nums.length === 0 || nums.length * nums[0].length != r *c){
      return nums;
    }

    let allElement = nums.reduce((a, b) => a.concat(b));
    let result = [];
    for(let i = 0; i < allElement.length / c; i++){
      result.push(allElement.slice(i*c, (i+1)*c));
    }
    return result;
};



