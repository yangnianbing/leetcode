/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (40.99%)
 * Total Accepted:    239.5K
 * Total Submissions: 583.4K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var result = 0;
    if(!height || height.length === 0){
        return 0;
    }

    var leftCache = [height[0]]
    var heightLen = height.length;
    var rightCache = [];
    rightCache[heightLen - 1] = height[heightLen - 1];
    for(var i = heightLen - 2; i > 0; i--){
        rightCache[i] = Math.max(height[i], rightCache[i + 1]);
    }

    for(var i = 1; i < height.length - 1; i++){
        leftCache[i] = Math.max(leftCache[i - 1], height[i]);
        var leftMax = leftCache[i - 1];
        var rightMax = rightCache[i + 1];

        if(leftMax <= height[i] || rightMax <= height[i]){
            continue;
        }

        result += Math.min(leftMax, rightMax) - height[i];
    }
    return result;
};
