/*
 * @lc app=leetcode id=330 lang=javascript
 *
 * [330] Patching Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
/**
 * 解题思路
 * 首先如果需要覆盖[1, n]最小的数组是什么？
 * [1] => [1->1]   n = 1
 * [1,2] => [1->3]  n = 3
 * [1,2,n + 1] => [1 -> 7]
 * 如果数组arr能覆盖[1->k], 那么添加一个k+1,能覆盖的范围就为2*k + 1
 */
var minPatches = function(nums, n) {

  let ans = 0
  let curr = 0

  for(let i of nums){
    while(curr + 1 < i && curr < n){
      curr = 2 * curr + 1
      ans++
    }
    curr += i
  }
  while(curr < n){
    curr = 2 * curr + 1
    ans++
  }
  return ans
};
// @lc code=end

