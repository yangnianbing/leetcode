/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length <= 2){
      return -1;
    }
    
    let pivot = 0;
    let right = nums.slice(1).reduce((a, b) => a + b);
    let left = 0;

    while(pivot < nums.length){
      if(left === right){
        return pivot;
      }
      left += nums[pivot];
      right -= nums[pivot + 1];
      pivot++;
    }

    return -1;
    
};


