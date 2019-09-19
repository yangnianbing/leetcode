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
    let result = [];

    function dFS(queens){
        if(queens.length === n){
            result.push(queens);
            return;
        }else{
            for(let i = 0; i < n; i++){
                if(isValid(queens, i)){
                    dFS(queens.concat(i));
                }
            }
        }
    }

    dFS([]);


    return result.map(o => 
        o.map(row => '.'.repeat(row) + 'Q' + '.'.repeat(n - row - 1)
        )
    );

    function isValid(queens, i){
        //有queue在同一列
       if(queens.indexOf(i) !== -1){
           return false;
       }
       for(let row = 0, len = queens.length; row < len; row++){
           if(Math.abs(len - row) === Math.abs(i - queens[row])){
               return false;
           }
       }
       return true;
    }
};


