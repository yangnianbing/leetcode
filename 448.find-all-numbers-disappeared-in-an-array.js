/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i = 0; i < nums.length; i++){
      let value = Math.abs(nums[i]) - 1;

      if(nums[value] > 0){
        nums[value] = -nums[value];
      }
    }

    let result = [];
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0){
        result.push(i + 1);
      }
    }

    return result;
};


