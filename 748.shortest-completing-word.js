/*
 * @lc app=leetcode id=748 lang=javascript
 *
 * [748] Shortest Completing Word
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  let letters = licensePlate.replace(/([0-9]|\s)/g, '').toLowerCase();
  let lettersMap = letters.split('').reduce((map, cur) => {
    map[cur] = (map[cur] || 0) + 1;
    return map;
  }, {})

  let result = '';
  for(let word of words){
    let lettersMapClone = Object.assign({}, lettersMap);
    for(let i of word.split('')){
      if(lettersMapClone[i] === 1){
        delete lettersMapClone[i];
      }else if(lettersMapClone[i]){
        lettersMapClone[i]--;
      }
    }
    if(JSON.stringify(lettersMapClone) === '{}' &&
    ((result === '') || (word.length < result.length))){
      result = word;
    }
  }


  return result;
};


