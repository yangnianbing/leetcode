/*
 * @lc app=leetcode id=164 lang=javascript
 *
 * [164] Maximum Gap
 *
 * https://leetcode.com/problems/maximum-gap/description/
 *
 * algorithms
 * Hard (33.16%)
 * Likes:    604
 * Dislikes: 140
 * Total Accepted:    76.6K
 * Total Submissions: 228.2K
 * Testcase Example:  '[3,6,9,1]'
 *
 * Given an unsorted array, find the maximum difference between the successive
 * elements in its sorted form.
 * 
 * Return 0 if the array contains less than 2 elements.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,6,9,1]
 * Output: 3
 * Explanation: The sorted form of the array is [1,3,6,9], either
 * (3,6) or (6,9) has the maximum difference 3.
 * 
 * Example 2:
 * 
 * 
 * Input: [10]
 * Output: 0
 * Explanation: The array contains less than 2 elements, therefore return 0.
 * 
 * Note:
 * 
 * 
 * You may assume all elements in the array are non-negative integers and fit
 * in the 32-bit signed integer range.
 * Try to solve it in linear time/space.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(!nums || nums.length < 2){
        return 0;
    }
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    let gap = Math.ceil((max - min) / (nums.length - 1));

    let bucketMin = new Array(nums.length - 1).fill(Number.MAX_SAFE_INTEGER);
    let bucketMax = new Array(nums.length - 1).fill(Number.MIN_SAFE_INTEGER);

    for(let i of nums){
        if(i === min || i === max){
            continue;
        }

        let index = parseInt((i - min) / gap);
        bucketMin[index] = Math.min(i, bucketMin[index]);
        bucketMax[index] = Math.max(i, bucketMax[index]);
    }

    let maxGap = Number.MIN_SAFE_INTEGER;
    let previous = min;

    for(let i = 0; i < nums.length-1; i++){
        if(bucketMax[i] === Number.MIN_SAFE_INTEGER && bucketMin[i] === Number.MAX_SAFE_INTEGER){
            continue;
        }
        maxGap = Math.max(maxGap, bucketMin[i] - previous);
        previous = bucketMax[i];
    }
    maxGap = Math.max(maxGap, max - previous);
    return maxGap;
    
};

// @lc code=end

