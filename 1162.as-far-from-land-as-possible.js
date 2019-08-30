/*
 * @lc app=leetcode id=1162 lang=javascript
 *
 * [1162] As Far from Land as Possible
 *
 * https://leetcode.com/problems/as-far-from-land-as-possible/description/
 *
 * algorithms
 * Medium (37.21%)
 * Likes:    104
 * Dislikes: 5
 * Total Accepted:    5.1K
 * Total Submissions: 13.4K
 * Testcase Example:  '[[1,0,1],[0,0,0],[1,0,1]]'
 *
 * Given an N x N grid containing only values 0 and 1, where 0 represents water
 * and 1 represents land, find a water cell such that its distance to the
 * nearest land cell is maximized and return the distance.
 * 
 * The distance used in this problem is the Manhattan distance: the distance
 * between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.
 * 
 * If no land or water exists in the grid, return -1.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: [[1,0,1],[0,0,0],[1,0,1]]
 * Output: 2
 * Explanation: 
 * The cell (1, 1) is as far as possible from all the land with distance 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * 
 * Input: [[1,0,0],[0,0,0],[0,0,0]]
 * Output: 4
 * Explanation: 
 * The cell (2, 2) is as far as possible from all the land with distance
 * 4.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= grid.length == grid[0].length <= 100
 * grid[i][j] is 0 or 1
 * 
 * 
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * 
 * bfs
 */
var maxDistanceBFS = function(grid) {
    let queue = [];

    for(let i = 0; i < grid.length; i++){
        for(let j = 0, len = grid[0].length; j < len; j++){
            if(grid[i][j] === 1){
                queue = queue.concat([[i -1, j], [i + 1, j], [i, j - 1], [i, j + 1]]);
            }
        }
    }

    let steps = 0;
    while(queue.length != 0){
        ++steps;
        let queue1 = [];
        for(let cell of queue){
            let [i,j] = cell;
            if(i >=0 && j >= 0  && i < grid.length && j < grid[i].length && grid[i][j] === 0){
                queue1 = queue1.concat([[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]);
                grid[i][j] = steps;
            }
        }
        queue = queue1;
    }

    return steps === 1 ? -1 : steps - 1;
};


/**
 * dfs
 */ 
var maxDistance = function(grid){
    for(let i = 0, len = grid.length; i < len; i++){
        for(let j = 0, len1 = grid[i].length; j < len1; j++){
            if(grid[i][j] === 1){
                dfs(grid, i, j, 1, true);
            }
        }
    }
    let max = -1;
    for(let i = 0, len = grid.length; i < len; i++){
        for(let j = 0, len1 = grid[i].length; j < len1; j++){
            if(grid[i][j] != 1){
                max = Math.max(max, grid[i][j]);
            }
        }
    } 
    return max === -1 ? - 1 : (max - 1);
    
    function dfs(grid, i, j, dist, land){
        if(!land){
            if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || (grid[i][j] !== 0 && grid[i][j] <= dist)){
                return;
            }    
            grid[i][j] = dist;
        }
        dfs(grid, i - 1, j, dist + 1);
        dfs(grid, i + 1, j, dist + 1);
        dfs(grid, i, j - 1, dist + 1);
        dfs(grid, i, j + 1, dist + 1);
    }
}

