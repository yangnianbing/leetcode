/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let chars = s.split('');

    for(let i = 0; i < chars.length; i += 2 * k){
      let start = i,
        end = Math.min(start + k - 1, chars.length - 1);
      
        while(start < end){
          [chars[start], chars[end]] = [chars[end], chars[start]]
          start++;
          end--;
        }
    }
    return chars.join('')
};

