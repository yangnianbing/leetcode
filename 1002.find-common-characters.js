/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    A.sort((a, b) => a.length < b.length ? 1 : -1);

    let shortStr = A.shift();

    let result = [];
    
    let aMap = A.map((str) => {
      let map = {};
      for(let i of str){
        map[i] = map[i] ? (map[i] + 1) : 1;
      }
      return map;
    })

    for(let i of shortStr){
      if(aMap.every(strMap => {
        if(strMap[i]){
          strMap[i]--;
          return true;
        }else{
          return false;
        }
      })){
        result.push(i);
      }
    }
    
    return result;
};


