/*
 * @lc app=leetcode id=520 lang=javascript
 *
 * [520] Detect Capital
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  let chars = word.split('').map(c => c.charCodeAt(0));
  return chars.every(c => c <= 90) ||
  chars.every(c => c >= 97) || 
  (chars[0] <= 90 && chars.slice(1).every(c => c >= 97));
};

