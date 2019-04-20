/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.57%)
 * Total Accepted:    253.1K
 * Total Submissions: 509.3K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let counter = toMap(s);

    for(let i = 0, len = s.length; i < len; i++){
        if(counter[s.charAt(i)] === 1){
            return i;
        }
    }
    return -1;
};

function toMap(str){
    let map = {};
    str.split('').forEach(element => {
        if(!map[element]){
            map[element] = 0;
        }
        map[element]++;
    });
    return map;
}

