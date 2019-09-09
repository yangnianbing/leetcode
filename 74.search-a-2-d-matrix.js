/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 *
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * algorithms
 * Medium (35.13%)
 * Likes:    998
 * Dislikes: 118
 * Total Accepted:    245.6K
 * Total Submissions: 698K
 * Testcase Example:  '[[1,3,5,7],[10,11,16,20],[23,30,34,50]]\n3'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 * 
 * 
 * Integers in each row are sorted from left to right.
 * The first integer of each row is greater than the last integer of the
 * previous row.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 3
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * matrix = [
 * ⁠ [1,   3,  5,  7],
 * ⁠ [10, 11, 16, 20],
 * ⁠ [23, 30, 34, 50]
 * ]
 * target = 13
 * Output: false
 * 
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length === 0){
        return false;
    }
    let row = matrix.length;
    let col = matrix[0].length;


    let start = 0,
        end = row - 1,
        mid;
    

    while(end >= start){
        mid = parseInt((start + end) / 2);
        if(matrix[mid][0] <= target && matrix[mid][col - 1] >= target){
            start = 0,
            end = col - 1;
            let rowMid;
            while(end >= start){
                rowMid = parseInt((start + end) / 2);
                if(matrix[mid][rowMid] === target){
                    return true;
                }
                if(matrix[mid][rowMid] > target){
                    end = rowMid - 1;
                }else{
                    start = rowMid + 1;
                }
            }
        }
        else if(matrix[mid][0] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return false;
    
    
};

