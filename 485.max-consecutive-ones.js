/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;

    let secondMax = 0;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] === 1){
        secondMax++;
      }else{
        max = Math.max(secondMax, max);
        secondMax = 0;
      }
    }
    max = Math.max(secondMax, max);
    return max;
};


