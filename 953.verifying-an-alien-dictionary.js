/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let index = {};
    for(let i in order){
      index[order.charAt(i)] = parseInt(i);
    }
    let compare = (word1, word2, order) => {
      for(let i = 0, len = Math.min(word1.length, word2.length); i < len; i++){
        if(word1.charAt(i) === word2.charAt(i)){
          continue;
        }else if(index[word1.charAt(i)] < index[word2.charAt(i)]){
          return true;
        }else{
          return false;
        }
      }
      return word1.length < word2.length;
    }

    for(let i = 1; i < words.length; i++){
      if(!compare(words[i - 1], words[i])){
        return false;
      }
    }

    return true;
};

