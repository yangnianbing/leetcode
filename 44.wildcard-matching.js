/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 *
 * https://leetcode.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (22.18%)
 * Total Accepted:    157K
 * Total Submissions: 707.9K
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement wildcard pattern
 * matching with support for '?' and '*'.
 * 
 * 
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 * 
 * 
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like ? or *.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "aa"
 * p = "*"
 * Output: true
 * Explanation: '*' matches any sequence.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "cb"
 * p = "?a"
 * Output: false
 * Explanation: '?' matches 'c', but the second letter is 'a', which does not
 * match 'b'.
 * 
 * 
 * Example 4:
 * 
 * 
 * Input:
 * s = "adceb"
 * p = "*a*b"
 * Output: true
 * Explanation: The first '*' matches the empty sequence, while the second '*'
 * matches the substring "dce".
 * 
 * 
 * Example 5:
 * 
 * 
 * Input:
 * s = "acdcb"
 * p = "a*c?b"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var cache = [];
    return dp(s, p, 0, 0, cache);

    function dp(s, p, sIndex, pIndex, cache){
        if(!cache[sIndex]){
            cache[sIndex] = [];
        }
        if(cache[sIndex][pIndex] != undefined){
            return cache[sIndex][pIndex] === true;
        }

        if(pIndex === p.length){
            cache[sIndex][pIndex] = sIndex === s.length
        }else if(sIndex > s.length || pIndex > p.length){
            cache[sIndex][pIndex] = false;
        }else{
            if(s[sIndex] === p[pIndex] || p[pIndex] === '?'){
                cache[sIndex][pIndex] = dp(s, p, sIndex + 1, pIndex + 1, cache);
            }else if(p[pIndex] === '*'){
                cache[sIndex][pIndex] = dp(s, p, sIndex, pIndex + 1, cache) ||
                                        dp(s, p, sIndex + 1, pIndex, cache)
            }else{
                cache[sIndex][pIndex] = false;
            }

        }
        return cache[sIndex][pIndex];
    }
};
