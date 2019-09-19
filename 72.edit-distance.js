/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 *
 * https://leetcode.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (39.01%)
 * Likes:    2468
 * Dislikes: 39
 * Total Accepted:    196.1K
 * Total Submissions: 497.6K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * Given two words word1 and word2, find the minimum number of operations
 * required to convert word1 to word2.
 * 
 * You have the following 3 operations permitted on a word:
 * 
 * 
 * Insert a character
 * Delete a character
 * Replace a character
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: word1 = "horse", word2 = "ros"
 * Output: 3
 * Explanation: 
 * horse -> rorse (replace 'h' with 'r')
 * rorse -> rose (remove 'r')
 * rose -> ros (remove 'e')
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: word1 = "intention", word2 = "execution"
 * Output: 5
 * Explanation: 
 * intention -> inention (remove 't')
 * inention -> enention (replace 'i' with 'e')
 * enention -> exention (replace 'n' with 'x')
 * exention -> exection (replace 'n' with 'c')
 * exection -> execution (insert 'u')
 * 
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
   let cache = Array.from({length: word1.length+1}, () => new Array(word2.length+1).fill(0));


   for(let i = 1; i <= word1.length; i++){
        cache[i][0] = i;
   }

   for(let j = 1; j <= word2.length; j++){
       cache[0][j] = j;
   }

   for(let i = 1; i <= word1.length; i++){
       for(let j = 1; j <= word2.length; j++){
           if(word1.charAt(i-1) === word2.charAt(j-1)){
                cache[i][j] = cache[i - 1][j - 1];
           }else{
               cache[i][j] = Math.min(cache[i - 1][j - 1], cache[i - 1][j], cache[i][j - 1]) + 1;
           }
       }
   }

   return cache[word1.length][word2.length];
};



