/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let strs = s.split('');
    let staticInfo = {};

    strs.forEach((str, index) => {
      if(staticInfo[str]){
        staticInfo[str]++;
      }else{
        staticInfo[str] = 1;
      }
    })

    let result = 0;
    Object.values(staticInfo).forEach(times => {
      result += parseInt(times / 2) * 2;
      if(result % 2 === 0 && times % 2 === 1){
        result += 1;
      }
    })

    return result;
};

