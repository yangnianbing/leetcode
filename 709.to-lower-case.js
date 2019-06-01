/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    return str.split('').map(c => 
      (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ? String.fromCharCode(c.charCodeAt(0) + 32) : c
    ).join('')
};



