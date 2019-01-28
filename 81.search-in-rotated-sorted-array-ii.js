/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Medium (32.47%)
 * Total Accepted:    151.1K
 * Total Submissions: 465.3K
 * Testcase Example:  '[2,5,6,0,0,1,2]\n0'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return true,
 * otherwise return false.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 0
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [2,5,6,0,0,1,2], target = 3
 * Output: false
 * 
 * Follow up:
 * 
 * 
 * This is a follow up problem to Search in Rotated Sorted Array, where nums
 * may contain duplicates.
 * Would this affect the run-time complexity? How and why?
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    var left = 0;
    var right = nums.length - 1;

    while(left <= right){
        while(left < right && nums[left] == nums[right]){
            left++;
        }
        var mid = Math.floor((left + right) / 2);
        if(nums[mid] === target){
            return true;
        }
        if(nums[left] === target){
            return true
        }
        if(nums[right] === target){
            return true
        }
        if(right - left === 1 || right - left === 0){
            return false;
        }

        var rotateInLeft = nums[mid] < nums[left];
        var rotateInRight = nums[mid] > nums[right];
        if(nums[left] < target && target < nums[mid]){
            right = mid;
        }else if(nums[mid] < target && target < nums[right]){
            left = mid;
        }else if(rotateInLeft){
            right = mid;
        }else if(rotateInRight){
            left = mid;
        }else{
            return false;
        }
    }
    return false;
};
