/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {};
    nums.forEach(num => {
      if(!map[num]){
        map[num] = 0;
      }
      map[num]++;
    })

    let max = 0;
    for(let i in map){
      if(map[Number(i) + 1]){
        max = Math.max(max, map[i] + map[Number(i)+1]);
      }
    }

    return max;

};


