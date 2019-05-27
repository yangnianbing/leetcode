/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  return words.filter(word => {
    return /^[qwertyuiop]*$/i.test(word) || /^[asdfghjkl]*$/i.test(word) || /^[zxcvbnm]*$/i.test(word)
  })
};



