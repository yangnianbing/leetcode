/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.70%)
 * Total Accepted:    135.4K
 * Total Submissions: 389.8K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 * 
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 * 
 * Example 1:
 * 
 * 
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 * 
 * Example 2:
 * 
 * 
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 * 
 * Example 3:
 * 
 * 
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 * 
 * Example 4:
 * 
 * 
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 * 
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 * 
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strEle = str.split(' ');

    if(pattern.length != strEle.length){
        return false
    }

    let staticInfo = {};
    for(let i = 0; i < pattern.length; i++){
        if(staticInfo[pattern[i]] && staticInfo[pattern[i]] != strEle[i]){
            return false;
        }else if(!staticInfo[pattern[i]] && Object.values(staticInfo).indexOf(strEle[i]) != -1){
            return false;
        }else if(!staticInfo[pattern[i]]){
            staticInfo[pattern[i]] = strEle[i];
        }
    }
    return true;
};

