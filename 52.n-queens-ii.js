/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 *
 * https://leetcode.com/problems/n-queens-ii/description/
 *
 * algorithms
 * Hard (50.13%)
 * Total Accepted:    90.3K
 * Total Submissions: 180.1K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return the number of distinct solutions to the n-queens
 * puzzle.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: 2
 * Explanation: There are two distinct solutions to the 4-queens puzzle as
 * shown below.
 * [
 * [".Q..",  // Solution 1
 * "...Q",
 * "Q...",
 * "..Q."],
 * 
 * ["..Q.",  // Solution 2
 * "Q...",
 * "...Q",
 * ".Q.."]
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0;
    function dfs(queues, diff, sum){
        let len = queues.length;
        if(queues.length === n){
            count++;
        }else{
            for(let i = 0; i < n; i++){
                if(queues.indexOf(i) === -1 && 
                diff.indexOf(len - i) === -1 &&
                sum.indexOf(len + i) === -1
                ){
                    dfs(queues.concat(i), diff.concat(len - i), sum.concat(len + i));
                }
            }
        }
    }
    dfs([], [], [])
    return count;
};
