/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 *
 * https://leetcode.com/problems/decode-ways/description/
 *
 * algorithms
 * Medium (22.74%)
 * Likes:    1636
 * Dislikes: 1888
 * Total Accepted:    289.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '"12"'
 *
 * A message containing letters from A-Z is being encoded to numbers using the
 * following mapping:
 * 
 * 
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * 
 * 
 * Given a non-empty string containing only digits, determine the total number
 * of ways to decode it.
 * 
 * Example 1:
 * 
 * 
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2
 * 6).
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
   if(!s){
       return 0;
   }
   let len = s.length,
        dp = new Array(len + 1).fill(0);
   dp[0] = 1;
   dp[1] = s.charAt(0) !== '0' ? 1 : 0;

   for(let i = 2; i <= len; i++){
       let first = parseInt(s.charAt(i-1));
       let second = parseInt(s.charAt(i-2) + s.charAt(i - 1));

       if(first >= 1 && first <= 9){
           dp[i] += dp[i - 1];
       }
       if(second >= 10 && second <= 26){
           dp[i] += dp[i - 2];
       }
   }
   return dp[len];
};

