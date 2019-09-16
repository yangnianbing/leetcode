/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 *
 * https://leetcode.com/problems/surrounded-regions/description/
 *
 * algorithms
 * Medium (23.69%)
 * Likes:    911
 * Dislikes: 479
 * Total Accepted:    161.1K
 * Total Submissions: 673.4K
 * Testcase Example:  '[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]'
 *
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions
 * surrounded by 'X'.
 * 
 * A region is captured by flipping all 'O's into 'X's in that surrounded
 * region.
 * 
 * Example:
 * 
 * 
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * 
 * 
 * After running your function, the board should be:
 * 
 * 
 * X X X X
 * X X X X
 * X X X X
 * X O X X
 * 
 * 
 * Explanation:
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on
 * the border of the board are not flipped to 'X'. Any 'O' that is not on the
 * border and it is not connected to an 'O' on the border will be flipped to
 * 'X'. Two cells are connected if they are adjacent cells connected
 * horizontally or vertically.
 * 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(!board || board.length < 3 || board[0].length < 3){
        return;
    }

    let rows = board.length;
    let cols = board[0].length;

    for(let i = 0; i < cols; i++){
        if(board[0][i] === 'O'){
            board[0][i] = 1;
            if(board[1][i] === 'O'){
                walk(1, i, board);
            }
        }

        if(board[rows - 1][i] === 'O'){
            board[rows - 1][i] = 1;
            if(board[rows - 2][i] === 'O'){
                walk(rows - 2, i, board);
            }
        }

    }

    for(let i = 0; i < rows; i++){
        if(board[i][0] === 'O'){
            board[i][0] = 1;
            if(board[i][1] === 'O'){
                walk(i, 1, board);
            }
        } 

        if(board[i][cols - 1] === 'O'){
            board[i][cols - 1] = 1;
            if(board[i][cols - 2] === 'O'){
                walk(i, cols - 2, board);
            }
        }
    }
    function walk(i, j, board){
        if(board[i][j] === 'O'){
            board[i][j] = 1;
            i - 1 >= 0 && walk(i - 1, j, board);
            i + 1 < rows && walk(i + 1, j, board);
            j - 1 >= 0 && walk(i, j - 1, board);
            j + 1 < cols && walk(i, j + 1, board);
        }
    }


    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X';
            }
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(board[i][j] === 1){
                board[i][j] = 'O';
            }
        }
    }

    return board;
};




