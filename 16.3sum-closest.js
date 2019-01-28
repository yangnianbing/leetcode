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
    var result = Number.MAX_VALUE;
    var index = [];
    for(var i = 0; i < nums.length - 2; i++){
        for(var j = i + 1; j < nums.length - 1; j++){
            for(var k = j + 1; k < nums.length; k++){
                if(Math.abs(nums[i] + nums[j] + nums[k] - target) < result){
                    result = Math.abs(nums[i] + nums[j] + nums[k] - target);
                    index = [i, j, k]
                }
                
            }
        }
    }
    return nums[index[0]] + nums[index[1]] + nums[index[2]];
};

threeSumClosest([0, 0, 0], 1)
