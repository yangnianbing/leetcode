/*
 * @lc app=leetcode id=1143 lang=javascript
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (58.13%)
 * Likes:    155
 * Dislikes: 8
 * Total Accepted:    7.7K
 * Total Submissions: 13.2K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence.
 * 
 * A subsequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative
 * order of the remaining characters. (eg, "ace" is a subsequence of "abcde"
 * while "aec" is not). A common subsequence of two strings is a subsequence
 * that is common to both strings.
 * 
 * 
 * 
 * If there is no common subsequence, return 0.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text1 = "abcde", text2 = "ace" 
 * Output: 3  
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 * 
 * 
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let len1 = text1.length,
        len2 = text2.length;

    let dp = Array.from({length: len1}, () => new Array(len2).fill(0));
    dp[0][0] = text1.charAt(0) === text2.charAt(0) ? 1 : 0; 
    for(let i = 1; i < len1; i++){
        if(text1.charAt(i) === text2.charAt(0) || (dp[i - 1][0] === 1)){
            dp[i][0] = 1;
        }
    }

    for(let j = 1; j < len2; j++){
        if(text2.charAt(j) === text1.charAt(0) || dp[0][j-1] === 1){
            dp[0][j] = 1;
        }
    }

    for(let i = 1; i < len1; i++){
        for(let j = 1; j < len2; j++){
            if(text1.charAt(i) === text2.charAt(j)){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1-1][len2-1];

};



