/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 */
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let wordsMap = {};
    words.forEach(word => {
      wordsMap[word] = true;
    })

    let result = '';
    words.sort()
    for(let word of words){
      let subStr = '';
      let isValid = true;

      for(let i = 0; i < word.length - 1; i++){
        subStr += word.charAt(i);
        if(!wordsMap[subStr]){
          isValid = false
          break;
        }
      }
      if(isValid && word.length > result.length){
        result = word;
      }
    }
    return result;
};

