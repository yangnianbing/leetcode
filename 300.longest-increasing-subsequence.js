/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 思路：
 * 1. 定义状态， dp[i]的值为数组元素[0...i]的最长上升子序列，初始值dp[0] = 1
 * 2. 状态转移方程，dp[i+1]的值为多少呢？用nums[i + 1]和前面的i个数进行比较，如果nums[i + 1]大，则可以把nums[i + 1]附着在最后，最长上升子序列长度+1
 * 3. 数组dp中最大的数，即为最长上升子序列 
 */
var lengthOfLIS1 = function(nums) {
    if(nums.length === 0){
      return 0
    }
    let dp = new Array(nums.length).fill(1)
    let result = 1
    for(let i = 1, len = nums.length; i < len; i++){
      for(j = 0; j < i; j++){
        if(nums[j] < nums[i]){
          dp[i] = Math.max(dp[j] + 1, dp[i])
        }
      }
      result = Math.max(result, dp[i])
    }
    return result
};


/**
 * 二分查找法思路
 * tail[i]存放的是最长上升子序列长度为i时，序列末尾的最小可能值
 * 如果nums[i + 1] 大于tail[i],那么直接往tail末尾插入nums[i + 1],即结果+1
 * 否则，找到tail中第一个小于nums[i  + 1]的值，将其value替换为nums[i + 1]
 * 
 * 这里推导一下为什么tail是递增序列
 * 用反证法
 * 1.如果长度为i最长递增序列为[a1.....ai],长度为j的最长递增序列为[b1...bj],且j > i
 * 2.如果存在bj < a[i]
 *  1) 因为b1....bj为递增且j > i.所以b[j] > b[i]
 *  2) 又bj < ai 推导出 ai > bi，所以存在递增序列[b1...bi]是一个长度为i但是结尾更小的递增子序列，与ai最小矛盾
 * 所以i < j的时候，tail[i] < tail[j]
 */
var lengthOfLIS = function(nums){
  const binarySearch = (arr, num) => {
    let left = 0
    let right = arr.length - 1
    while(left < right){
      let mid = left + ((right - left) >>> 1)
      if(arr[mid] < num){
        left = mid + 1
      }else{
        right = mid
      }
    }
    return left
  }
  if(nums.length === 0){
    return 0
  }
  let tail = [nums[0]]

  for(let i = 1, len = nums.length; i < len; i++){
    if(nums[i] > tail[tail.length - 1]){
      tail.push(nums[i])
    }else{
      tail[binarySearch(tail, nums[i])] =  nums[i]
    }
  }
  return tail.length
}
// @lc code=end