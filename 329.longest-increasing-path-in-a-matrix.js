/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 *
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/
 *
 * algorithms
 * Hard (40.75%)
 * Likes:    1347
 * Dislikes: 22
 * Total Accepted:    112.1K
 * Total Submissions: 269.7K
 * Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
 *
 * Given an integer matrix, find the length of the longest increasing path.
 * 
 * From each cell, you can either move to four directions: left, right, up or
 * down. You may NOT move diagonally or move outside of the boundary (i.e.
 * wrap-around is not allowed).
 * 
 * Example 1:
 * 
 * 
 * Input: nums = 
 * [
 * ⁠ [9,9,4],
 * ⁠ [6,6,8],
 * ⁠ [2,1,1]
 * ] 
 * Output: 4 
 * Explanation: The longest increasing path is [1, 2, 6, 9].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = 
 * [
 * ⁠ [3,4,5],
 * ⁠ [3,2,6],
 * ⁠ [2,2,1]
 * ] 
 * Output: 4 
 * Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally
 * is not allowed.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    if(matrix.length === 0){
        return 0;
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let max = 1;
    let cache = Array.from({length: m}, () => new Array(n).fill(0));

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            let len = dfs(matrix, i, j, m, n, cache, directions);
            max = Math.max(len, max);
        }
    }

    return max;

    function dfs(matrix, i, j, m, n, cache, directions){
        if(cache[i][j] !== 0){
            return cache[i][j];
        }
        let max = 1;
        for(let direction of directions){
            let x = i + direction[0],
                y = j + direction[1];

            if(x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]){
                continue;
            }

            let len = 1 + dfs(matrix, x, y, m, n, cache, directions);
            max = Math.max(len, max);
        }
        cache[i][j] = max;
        return max;
    }

};
// @lc code=end

