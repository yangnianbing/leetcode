/*
 * @lc app=leetcode id=628 lang=javascript
 *
 * [628] Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  if(nums.length < 3){
    return nums.reduce((a, b) => a * b);
  }
  let first = second = third = Number.MIN_SAFE_INTEGER;
  let min1 = min2 = Number.MAX_SAFE_INTEGER;
  for(let i of nums){
    if(i <= min1){
      [min1, min2] = [i, min1]
    }else if(i <= min2){
      min2 = i;
    }
    if(i >= first){
      [first, second, third] = [i, first, second];
      first = i
    }else if(i >= second){
      [second, third] = [i, second];
    }else if(i >= third){
      third = i;
    }
  }

  return Math.max(min1 * min2 * first, first * second * third);
};

