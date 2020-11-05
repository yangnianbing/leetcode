/*
 * @lc app=leetcode id=336 lang=javascript
 *
 * [336] Palindrome Pairs
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  const result = []
  for(let i = 0; i < words.length - 1; i++){
    for(let j = i + 1; j < words.length; j++){
      if(isPalindrome(words[i], words[j])){
        result.push([i, j])
      }
      if(isPalindrome(words[j], words[i])){
        result.push([j, i])
      }
    }
  }
  return result

  function isPalindrome(str1, str2){
    const str = str1 + str2
    let start = 0
    let end = str.length - 1
    
    while(start < end){
      if(str[start] !== str[end]){
        return false
      }
      start++
      end--
    }
    return true
  }
};
// @lc code=end

