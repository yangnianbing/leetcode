/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 *
 * https://leetcode.com/problems/3sum-closest/description/
 *
 * algorithms
 * Medium (33.54%)
 * Total Accepted:    225.7K
 * Total Submissions: 673.1K
 * Testcase Example:  '[-1,2,1,-4]\n1'
 *
 * Given an array nums of n integers and an integer target, find three integers
 * in nums such that the sum is closest to target. Return the sum of the three
 * integers. You may assume that each input would have exactly one solution.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 2, 1, -4], and target = 1.
 * 
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => {
        return a > b ? 1 : -1
    })
    var sum = Number.MAX_VALUE;
    for(var i = 0, len = nums.length; i < len - 2; i++){
        for(var j = i + 1, k = len - 1; j < k; ){
            if(Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(sum-target)){
                sum = nums[i] + nums[j] + nums[k];
            }
            if(nums[i] + nums[j] + nums[k] > target){
                k--;
            }else{
                j++
            }
        }
    }
    return sum;
};


threeSumClosest([1,1,1,0], 100)
