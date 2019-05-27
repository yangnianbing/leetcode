/*
 * @lc app=leetcode id=645 lang=javascript
 *
 * [645] Set Mismatch
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let map = {};
    let actualSum = 0;
    let result = [];
    nums.forEach(num => {
      actualSum += num;
      if(map[num]){
        result.push(num);
      }
      map[num] = true;
    })

    let sum = (1 + nums.length) * nums.length / 2;

    result.push(result[0] + sum - actualSum);
    return result;
    
};


