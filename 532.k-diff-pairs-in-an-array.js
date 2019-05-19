/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if(k < 0){
    return 0;
  }
    let staticInfo = {};

    nums.forEach(num => {
      if(staticInfo[num]){
        staticInfo[num]++;
      }else{
        staticInfo[num] = 1;
      }
    })

    let count = 0;
    for(let key in staticInfo){
      key = parseInt(key);
      if(k === 0 && staticInfo[key] >= 2){
        count++;
      }
      else if(k !== 0 && staticInfo[k + key]){
        count++;
      }
    }
    return count;
};

findPairs([1,1,1,1])

