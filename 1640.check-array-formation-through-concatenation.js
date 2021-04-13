/*
 * @lc app=leetcode id=1640 lang=javascript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    return pieces.every(item => {
      let index = arr.indexOf(item[0])
      let len = item.length
      if(index === -1){
        return false
      }else{
        for(let i = 1; i < len; i++){
          if(arr[index + i] !== item[i]){
            return false
          }
        }
        return true
      }
    })
};
// @lc code=end

