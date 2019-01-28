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
    var result = current = 0;
    var st = [];
    var len = height.length;
    while(current < len){
        while(st.length != 0 && height[current] > height[st[st.length - 1]]){
            var stTop = st[st.length - 1];
            st.pop();
            if(st.length === 0){
                break;
            }

            var distance = current - st[st.length - 1] - 1;
            var bounded_height = Math.min(height[current], height[st[st.length - 1]]) - height[stTop];
            result += distance * bounded_height;
        }
        st.push(current++);
    }
    return result;
};

