/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (37.02%)
 * Total Accepted:    124.7K
 * Total Submissions: 336.7K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n×n chessboard
 * such that no two queens attack each other.
 * 
 * 
 * 
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 * 
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space
 * respectively.
 * 
 * Example:
 * 
 * 
 * Input: 4
 * Output: [
 * ⁠[".Q..",  // Solution 1
 * ⁠ "...Q",
 * ⁠ "Q...",
 * ⁠ "..Q."],
 *     [0, 1]
 *     [1, 2]
 * ⁠["..Q.",  // Solution 2
 * ⁠ "Q...",
 * ⁠ "...Q",
 * ⁠ ".Q.."]
 * ]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var pos = [];

    function solveNQueensDFS(pos, row, result){

        if(row\)
    }

    function isValid(pos, row, col){
        for(var i = 0; i < row; ++i){
            if(col === pos[i] || Math.abs(row - i) === Math.abs(col - pos[i])){
                return false;
            }
        }
        return true;
    }
};

