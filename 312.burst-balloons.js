/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 *
 * https://leetcode.com/problems/burst-balloons/description/
 *
 * algorithms
 * Hard (45.86%)
 * Total Accepted:    55K
 * Total Submissions: 120K
 * Testcase Example:  '[3,1,5,8]'
 *
 * Given n balloons, indexed from 0 to n-1. Each balloon is painted with a
 * number on it represented by array nums. You are asked to burst all the
 * balloons. If the you burst balloon i you will get nums[left] * nums[i] *
 * nums[right] coins. Here left and right are adjacent indices of i. After the
 * burst, the left and right then becomes adjacent.
 * 
 * Find the maximum coins you can collect by bursting the balloons wisely.
 * 
 * Note:
 * 
 * 
 * You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can
 * not burst them.
 * 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
 * 
 * 
 * Example:
 * 
 * 
 * Input: [3,1,5,8]
 * Output: 167 
 * Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  -->
 * []
 * coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let cache = [];

    for(let i = 0; i < nums.length; i++){
        cache[i] = [];
    }

    nums.unshift(1);
    nums.push(1);
    return burst(cache, nums, 0, nums.length - 1);
    function burst(cache, nums, left, right){
        if(left+1 === right){
            return 0;
        }
        if(cache[left][right]){
            return cache[left][right];
        }
    
        let maxResult = 0;
        for(let i = left + 1; i < right; ++i){
            maxResult = Math.max(maxResult, nums[left] * nums[i] * nums[right] + burst(cache, nums, left, i) + burst(cache, nums, i, right))
        }
        cache[left][right] = maxResult;
        

        return maxResult;
    }
};

