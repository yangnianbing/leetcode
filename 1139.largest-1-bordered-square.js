/*
 * @lc app=leetcode id=1139 lang=javascript
 *
 * [1139] Largest 1-Bordered Square
 *
 * https://leetcode.com/problems/largest-1-bordered-square/description/
 *
 * algorithms
 * Medium (43.23%)
 * Likes:    62
 * Dislikes: 20
 * Total Accepted:    4.4K
 * Total Submissions: 10.1K
 * Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'
 *
 * Given a 2D grid of 0s and 1s, return the number of elements in the largest
 * square subgrid that has all 1s on its border, or 0 if such a subgrid doesn't
 * exist in the grid.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
 * Output: 9
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: grid = [[1,1,0,0]]
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= grid.length <= 100
 * 1 <= grid[0].length <= 100
 * grid[i][j] is 0 or 1
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare1 = function(grid) {
    let max = 0,
        row = grid.length,
        col = grid[0].length;


    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1){
                max = Math.max(max, square(grid, i, j));
            }
            
        }
    }
    
    return max;

    function square(grid, i, j){
        let maxLen = 1;

        for(let l = 2; i + l <= row && j + l <= col; l++){
            if(isSquare(grid, i, j, l)){
                maxLen = l * l;
            }
        }
        return maxLen;
    }

    function isSquare(grid, y, x, len){
        for(let i = y; i < y + len; i++){
            if(grid[i][x] === 0 || grid[i][x + len - 1] === 0){
                return false;
            }
        }
        return grid[y].slice(x, x + len).every(x => x === 1) && 
                grid[y + len - 1].slice(x, x + len).every(x => x === 1);
    }
};


var largest1BorderedSquare = function(grid) {
    let y = grid.length,
        x = grid[0].length;
    
    let hor = Array.from({length: y}, () => new Array(x).fill(0));
    let ver = Array.from({length: y}, () => new Array(x).fill(0));

    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            if(grid[i][j] === 1){
                hor[i][j] = j === 0 ? 1 : (hor[i][j - 1] + 1);
                ver[i][j] = i === 0 ? 1 : (ver[i - 1][j] + 1);
            }
        }
    }

    let max = 0;

    for(let i = y - 1; i >= 0; i--){
        for(let j = x - 1; j >= 0; j--){
            let small = Math.min(hor[i][j], ver[i][j]);
            while(small > max){
                if(ver[i][j - small + 1] >= small &&
                    hor[i - small + 1][j] >= small){
                        max = small;
                }
                small--;
            }
        }
    }
    return max * max;
}


