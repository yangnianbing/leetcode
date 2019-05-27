/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = {};
    let left = {};
    let right = {};

    nums.forEach((num, index) => {
      if(!map[num]){
        map[num] = 0;
      }
      map[num]++;
      if(left[num] === undefined){
        left[num] = index;
      }
      right[num] = index;
      
    })

    let maxFreq = Math.max(...Object.values(map));

    let result = nums.length;
    for(let key in map){
      if(map[key] === maxFreq){
        result = Math.min(result, right[key] - left[key] + 1);
      }
    }

    return result;

};



