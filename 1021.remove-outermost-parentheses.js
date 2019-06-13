/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let removeOuter = (str) => {
    return str.slice(1, str.length-1);
  }

  let parts = [];
  let leftNum = 0;
  let rightNum = 0;
  let begin = 0;
  for(let i = 0; i < S.length; i++){
    let c = S.charAt(i);

    if(c === ')'){
     rightNum++;
    }else{
      leftNum++;
    }
    if(leftNum === rightNum){
      parts.push(S.slice(begin, i+1))
      begin = i + 1;
      leftNum = rightNum = 0;
    }
  }

  return parts.map(part => removeOuter(part)).join('');
};


