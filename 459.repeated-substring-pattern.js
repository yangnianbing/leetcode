/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length <= 1){
      return false;
    }
    let doubleS = s + s;
    return doubleS.slice(1, doubleS.length - 1).indexOf(s) != -1;
};

