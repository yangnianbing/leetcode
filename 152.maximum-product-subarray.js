/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (29.84%)
 * Likes:    2505
 * Dislikes: 115
 * Total Accepted:    240.8K
 * Total Submissions: 802.5K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 * 
 * Example 1:
 * 
 * 
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(!nums && nums.length === 0){
        return null;
    }
    let max = imax = imin = nums[0];

    for(let i = 1, len = nums.length; i < len; i++){
        if(nums[i] < 0){
            [imax, imin] = [imin, imax];
        }

        imax = Math.max(nums[i], imax * nums[i]);
        imin = Math.min(nums[i], imin * nums[i]);

        max = Math.max(max, imax);
    }
    return max;
};

