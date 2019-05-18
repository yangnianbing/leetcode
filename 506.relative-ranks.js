/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
  let rankTopThree = ['Gold Medal', 'Silver Medal', 'Bronze Medal']


  let sortedNums = nums.slice(0).sort((a, b) => b - a);
  let sortedNumsMapping = {};
  sortedNums.forEach((num, index) => {
    if(index <= 2){
      sortedNumsMapping[num] = rankTopThree[index];
    }else{
      sortedNumsMapping[num] = index + 1 + '';
    }
    
  })
  

  return nums.map(num => sortedNumsMapping[num])
};

