/*
 * @lc app=leetcode id=1138 lang=javascript
 *
 * [1138] Alphabet Board Path
 *
 * https://leetcode.com/problems/alphabet-board-path/description/
 *
 * algorithms
 * Medium (42.94%)
 * Likes:    57
 * Dislikes: 31
 * Total Accepted:    6.1K
 * Total Submissions: 14.2K
 * Testcase Example:  '"leet"'
 *
 * On an alphabet board, we start at position (0, 0), corresponding to
 * character board[0][0].
 * 
 * Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown
 * in the diagram below.
 * 
 * 
 * 
 * We may make the following moves:
 * 
 * 
 * 'U' moves our position up one row, if the position exists on the board;
 * 'D' moves our position down one row, if the position exists on the
 * board;
 * 'L' moves our position left one column, if the position exists on the
 * board;
 * 'R' moves our position right one column, if the position exists on the
 * board;
 * '!' adds the character board[r][c] at our current position (r, c) to the
 * answer.
 * 
 * 
 * (Here, the only positions that exist on the board are positions with letters
 * on them.)
 * 
 * Return a sequence of moves that makes our answer equal to target in the
 * minimum number of moves.  You may return any path that does so.
 * 
 * 
 * Example 1:
 * Input: target = "leet"
 * Output: "DDR!UURRR!!DDD!"
 * Example 2:
 * Input: target = "code"
 * Output: "RR!DDRR!UUL!R!"
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= target.length <= 100
 * target consists only of English lowercase letters.
 * 
 */
/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let charToIndex = {};
    'abcdefghijklmnopqrstuvwxyz'.split('').forEach((c, index) => {
        charToIndex[c] = [Math.floor(index / 5), index % 5];
    })
    
    let result = '';
    target = 'a' + target;
    for(let i = 1, len = target.length; i < len; i++){
       result += distance(target.charAt(i - 1), target.charAt(i), charToIndex);
    }
    return result;
    
    
    function distance(a, b, charToIndex){
        let aIndex = charToIndex[a];
        let bIndex = charToIndex[b];
        
        let x = Math.abs(aIndex[1] - bIndex[1]);
        let y = Math.abs(aIndex[0] - bIndex[0]);


        
        let ud = (aIndex[0] > bIndex[0] ? 'U': 'D').repeat(y) 
        let rl = (aIndex[1] < bIndex[1] ? 'R':'L').repeat(x) ;

        if(aIndex[0] === 5){
            return ud + rl + '!';
        }
        return rl + ud + '!';
        
    }
};


