/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Hard (42.46%)
 * Likes:    2185
 * Dislikes: 117
 * Total Accepted:    232.2K
 * Total Submissions: 542.9K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * 
 * Your algorithm should run in O(n) complexity.
 * 
 * Example:
 * 
 * 
 * Input: [100, 4, 200, 1, 3, 2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
 * Therefore its length is 4.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Map();
    let max = 0;
    for(let num of nums){
        if(!map.has(num)){
            let left = map.get(num - 1) ? map.get(num - 1) : 0;
            let right = map.get(num + 1) ? map.get(num + 1): 0;
    
            let sum = left + right + 1;
            max = Math.max(max, sum);
            map.set(num, sum);
            map.set(num - left, sum);
            map.set(num + right, sum);
        }else{
            continue;
        }
    }

    return max;
};


