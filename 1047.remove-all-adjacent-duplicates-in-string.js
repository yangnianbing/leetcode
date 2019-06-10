/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    let chars = S.split('');
    chars.forEach(c => {
      if(c === stack[stack.length - 1]){
        stack.pop();
      }else{
        stack.push(c);
      }
    })

    return stack.join('');
};

