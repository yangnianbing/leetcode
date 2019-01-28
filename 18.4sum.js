/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.13%)
 * Total Accepted:    200K
 * Total Submissions: 686.6K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => {
        return a > b ? 1 : -1
    })
    var result = [];
    for(var i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        var newTarget = target - nums[i];
        var thisValue = nums.splice(i, 1);
        var threeSumResult = threeSum(nums, newTarget, i);
        nums.splice(i, 0, thisValue[0]);
        threeSumResult.map(node => {
            return node.push(nums[i]);
        })
        result = result.concat(threeSumResult);
    }
    return result;
};

var threeSum = function(nums, target, index) {
    var result = [];
    if(nums.length < 3){
        return result;
    }
    nums = nums.sort((a, b) => {
        return a > b ? 1 : -1
    })

    for(var i = index, len = nums.length; i < len - 2; i++){

        if(i > 0 && nums[i] === nums[i-1]){
            //去重，nums[i-1]的时候，已经把包含该值的结果都获取了
            continue;
        }

        for(var j = i + 1, k = len - 1; j < k; ){
            if(nums[i] + nums[j] + nums[k] === target){
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                //nums[i]固定了，如果有两个一样的nums[j],那么一定有两个一样的nums[k]
                while(j < k && nums[j] === nums[j - 1]){
                    j++;
                }
                while(j < k && nums[k] === nums[k+1]){
                    k--;
                }
            }else if(nums[i] + nums[j] + nums[k] > target){
                k--
            }else{
                j++
            }
        }
    }
    return result;
};

fourSum([1,0,-1,0,-2,2], 0)
