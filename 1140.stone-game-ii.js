/*
 * @lc app=leetcode id=1140 lang=javascript
 *
 * [1140] Stone Game II
 *
 * https://leetcode.com/problems/stone-game-ii/description/
 *
 * algorithms
 * Medium (60.57%)
 * Likes:    108
 * Dislikes: 24
 * Total Accepted:    4K
 * Total Submissions: 6.6K
 * Testcase Example:  '[2,7,9,4,4]'
 *
 * Alex and Lee continue their games with piles of stones.  There are a number
 * of piles arranged in a row, and each pile has a positive integer number of
 * stones piles[i].  The objective of the game is to end with the most
 * stones. 
 * 
 * Alex and Lee take turns, with Alex starting first.  Initially, M = 1.
 * 
 * On each player's turn, that player can take all the stones in the first X
 * remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).
 * 
 * The game continues until all the stones have been taken.
 * 
 * Assuming Alex and Lee play optimally, return the maximum number of stones
 * Alex can get.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: piles = [2,7,9,4,4]
 * Output: 10
 * Explanation:  If Alex takes one pile at the beginning, Lee takes two piles,
 * then Alex takes 2 piles again. Alex can get 2 + 4 + 4 = 10 piles in total.
 * If Alex takes two piles at the beginning, then Lee can take all three piles
 * left. In this case, Alex get 2 + 7 = 9 piles in total. So we return 10 since
 * it's larger. 
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= piles.length <= 100
 * 1 <= piles[i] <= 10 ^ 4
 * 
 */
/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    let sums = [],
        len = piles.length,
        cache = Array.from({length: len}, () => {
            return new Array(len).fill(0);
        });
    sums[len - 1] = piles[len - 1];
    for(let i = len - 2; i >= 0; i--){
        sums[i] = sums[i+1] + piles[i];
    }
    return helper(piles, 0, 1);

    function helper(piles, start, M){

        if(piles.length - start <= 2 * M){
            return sums[start];
        }
        if(cache[start][M] != 0){
            return cache[start][M];
        }
        let min = Number.MAX_SAFE_INTEGER;
        for(let i = 1; i <= 2*M; i++){
            min = Math.min(min, helper(piles, start + i, Math.max(M, i)));
        }
        cache[start][M] = sums[start] - min;
        return cache[start][M];
    }
};

