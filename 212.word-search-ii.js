/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 *
 * https://leetcode.com/problems/word-search-ii/description/
 *
 * algorithms
 * Hard (29.68%)
 * Likes:    1486
 * Dislikes: 82
 * Total Accepted:    138.7K
 * Total Submissions: 454.2K
 * Testcase Example:  '[["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]]\n["oath","pea","eat","rain"]'
 *
 * Given a 2D board and a list of words from the dictionary, find all words in
 * the board.
 * 
 * Each word must be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once in a word.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: 
 * board = [
 * ⁠ ['o','a','a','n'],
 * ⁠ ['e','t','a','e'],
 * ⁠ ['i','h','k','r'],
 * ⁠ ['i','f','l','v']
 * ]
 * words = ["oath","pea","eat","rain"]
 * 
 * Output: ["eat","oath"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * All inputs are consist of lowercase letters a-z.
 * The values of words are distinct.
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let dfs = (board, i, j, trie, result) => {
        let c = board[i][j];

        if(c == '#' || trie[c] == null){
            return;
        }

        trie = trie[c];
        if(trie.word){
            result.push(trie.word);
            trie.word = null;
        }
        board[i][j] = '#';
        if(i > 0){
            dfs(board, i - 1, j, trie, result);
        }
        if(j > 0){
            dfs(board, i, j - 1, trie, result);
        }
        if(i < board.length - 1){
            dfs(board, i + 1, j, trie, result);
        }
        if(j < board[0].length - 1){
            dfs(board, i, j + 1, trie, result);
        }
        board[i][j] = c;
    }


    let buildTrie = (words) => {
        let root = {};
    
        for(let word of words){
            let node = root;
    
            for(let c of word){
                if(!node[c]){
                    node[c] = {};
                }
                node = node[c];
            }
            node.word = word;
        }
        return root;
    }
    
    let result = [];
    let trie = buildTrie(words);   

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            dfs(board, i, j, trie, result);
        }
    }

    return result;

};

// @lc code=end

