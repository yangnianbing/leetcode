/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 *
 * https://leetcode.com/problems/palindrome-partitioning/description/
 *
 * algorithms
 * Medium (42.27%)
 * Likes:    1111
 * Dislikes: 45
 * Total Accepted:    180.6K
 * Total Submissions: 423.6K
 * Testcase Example:  '"aab"'
 *
 * Given a string s, partition s such that every substring of the partition is
 * a palindrome.
 * 
 * Return all possible palindrome partitioning of s.
 * 
 * Example:
 * 
 * 
 * Input: "aab"
 * Output:
 * [
 * ⁠ ["aa","b"],
 * ⁠ ["a","a","b"]
 * ]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];

    dfs(result, [], s);
    return result;

    function dfs(result, list, s){
        if(s.length === 0){
            result.push(new Array(...list));
            return;
        }
        let n = s.length;

        for(let i = 0; i < n; i++){
            if(isPalindrome(s, 0, i)){
                list.push(s.substring(0, i + 1));
                dfs(result, list, s.substring(i + 1));
                list.pop();
            }
        }

    }

    function isPalindrome(s, i, j){
        while(i <= j){
            if(s.charAt(i) === s.charAt(j)){
                i++;
                j--
            }else{
                return false;
            }
        }
        return true;
    }
};


