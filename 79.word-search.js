/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (29.87%)
 * Total Accepted:    237.1K
 * Total Submissions: 793.6K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board === null){return false;}
    var y = board.length;
    if(y === 0){return false;}
    var x = board[0].length;

    for(i = 0; i < y; i++){
        for(var j = 0; j < x; j++){
            if(existPath(board, i, j, word, 0)){
                return true;
            }
        }
    }
    return false;
    function existPath(board, y, x, word, index){
        if(index == word.length){return true;}
        if(x < 0 || y < 0 || y == board.length || x == board[y].length){return false;}
        if(board[y][x] != word[index]){return false;}
        board[y][x] = 0;
        var wheatherExist = existPath(board, y, x+1, word, index+1)
                    || existPath(board, y, x-1, word, index+1)
                    || existPath(board, y+1, x, word, index+1)
                    || existPath(board, y-1, x, word, index+1);
        board[y][x] = word[index];
        return wheatherExist;
    }
};

exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB')