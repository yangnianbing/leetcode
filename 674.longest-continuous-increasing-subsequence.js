/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let len = anchor = 0;
  for(let i = 0; i < nums.length; i++){
    if(i > 0 && nums[i - 1] >= nums[i]){
      anchor = i;
    }
    len = Math.max(len, i - anchor + 1);
  }

  return len;
};

