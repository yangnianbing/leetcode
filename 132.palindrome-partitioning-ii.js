/*
 * @lc app=leetcode id=132 lang=javascript
 *
 * [132] Palindrome Partitioning II
 *
 * https://leetcode.com/problems/palindrome-partitioning-ii/description/
 *
 * algorithms
 * Hard (28.08%)
 * Likes:    707
 * Dislikes: 25
 * Total Accepted:    111.4K
 * Total Submissions: 393.3K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return the minimum cuts needed for a palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output: 1
 * Explanation: The palindrome partitioning ["aa","b"] could be produced using
 * 1 cut.
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let cut = Array.from({length: s.length + 1}, (v, k) => k - 1);

    for(let i = 0; i < s.length; i++){
        for(let j = 0; j <= i && i + j < s.length && s.charAt(i - j) === s.charAt(i + j); j++){
            cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j]);
        }

        for(let j = 1; j <= i + 1 && i + j < s.length && s.charAt(i - j + 1) === s.charAt(i + j); j++){
            cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j + 1]);
        }
    }
    return cut[s.length];

};

