/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let seg = 0;

  for(let i = 0, len = s.length; i < len; i++){
    if(s.charAt(i) !== ' ' && (s.charAt(i - 1) === ' ' || i === 0)){
      seg++;
    }
  }
  return seg;
};


