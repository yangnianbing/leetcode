/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(nums.length === 1){
      return 0;
    }
    let first = second = 0;
    let firstIndex = 0;
    for(let i in nums){
      if(nums[i] >= first){
        [first, second] = [nums[i], first];
        firstIndex = i
      }else if( nums[i] > second ){
        second = nums[i];
      }
    }
    return (first / second) >= 2  ? firstIndex : -1;
};

