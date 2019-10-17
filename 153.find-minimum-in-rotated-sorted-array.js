/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (43.45%)
 * Likes:    1276
 * Dislikes: 184
 * Total Accepted:    331.5K
 * Total Submissions: 758.3K
 * Testcase Example:  '[3,4,5,1,2]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 * 
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 * 
 * Find the minimum element.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,4,5,1,2] 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,5,6,7,0,1,2]
 * Output: 0
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    if(nums[right] >= nums[left]){
        return nums[left];
    }
    while(left <= right){

        let mid = left + Math.floor((right - left) / 2);
        if(nums[mid] > nums[mid + 1]){
            return nums[mid + 1];
        }
        if(nums[mid - 1] > nums[mid]){
            return nums[mid];
        }

        if(nums[mid] > nums[0]){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
};
// @lc code=end
