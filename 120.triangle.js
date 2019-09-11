/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (40.42%)
 * Likes:    1303
 * Dislikes: 150
 * Total Accepted:    198.4K
 * Total Submissions: 488K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 * 
 * For example, given the following triangle
 * 
 * 
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 * 
 * 
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 * 
 * Note:
 * 
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 * 
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let row = triangle.length;

    let dp = Array.from({length: row}, () => new Array(triangle[row - 1].length).fill(0));

    triangle[row - 1].forEach((value, index) => {
        dp[row-1][index] = value;
    })

    for(let i = row - 2; i >= 0; i--){
        for(let j = 0, len = i + 1; j < len; j++){
            dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j], dp[i+1][j+1]);
        }
    }

    return dp[0][0];
};



