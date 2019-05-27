/*
 * @lc app=leetcode id=696 lang=javascript
 *
 * [696] Count Binary Substrings
 */
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let count = 0;
    for(let i = 0; i < s.length - 1; i++){
      if(s.charAt(i) !== s.charAt(i+1)){
       let n = 0;
       while(s.charAt(i-n) === s.charAt(i) && s.charAt(n+i+1) === s.charAt(i+1)){
         count++;
         n++;
       }
      }
    }
    return count;
};


