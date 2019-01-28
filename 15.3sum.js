/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (22.73%)
 * Total Accepted:    446.3K
 * Total Submissions: 2M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var result = [];
    if(nums.length < 3){
        return result;
    }
    nums = nums.sort((a, b) => {
        return a > b ? 1 : -1
    })

    if(nums[0] > 0 || nums[nums.length-1] < 0){
        return result;
    }
    for(var i = 0, len = nums.length; i < len - 2; i++){

        if(i > 0 && nums[i] === nums[i-1]){
            //去重，nums[i-1]的时候，已经把包含该值的结果都获取了
            continue;
        }

        for(var j = i + 1, k = len - 1; j < k; ){
            if(nums[i] + nums[j] + nums[k] === 0){
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
            }else if(nums[i] + nums[j] + nums[k] > 0){
                k--
            }else{
                j++
            }
        }
    }
    return result;
};
