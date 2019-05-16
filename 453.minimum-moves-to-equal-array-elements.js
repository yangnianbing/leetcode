/*
 * @lc app=leetcode id=453 lang=javascript
 *
 * [453] Minimum Moves to Equal Array Elements
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    if(nums.length === 1){
      return 0;
    }
    return nums.reduce((a, b) => a + b) - Math.min(...nums) * nums.length
};

