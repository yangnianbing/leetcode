/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var max = nums.slice(0, k).reduce((a, b) => a + b);
    var sum = max;

    for(let i = k; i < nums.length; i++){
      sum = sum + nums[i] - nums[i - k];
      max = Math.max(sum, max);
    }

    return max / k;
};

