/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums.length === 0){
      return 0;
    }

    let max1 = max2 = max3 = null;

    for(let i of nums){
      if(i === max1 || i === max2 || i === max3){
        continue;
      }
      if(i > max1 || max1 === null){
        [max1, max2, max3] = [i, max1, max2];
      }else if(i > max2 ||  max2 === null){
        [max2, max3] = [i, max2];
      }else if(i > max3 ||  max3 === null){
        max3 = i;
      }
    }

    return max3 !== null ? max3 : max1
};

