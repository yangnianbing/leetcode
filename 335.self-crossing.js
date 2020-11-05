/*
 * @lc app=leetcode id=335 lang=javascript
 *
 * [335] Self Crossing
 */

// @lc code=start
/**
 * @param {number[]} x
 * @return {boolean}
 */

 /*三种情况
                  i-2
    case 1 : i-1┌─┐
                └─┼─>i
                 i-3
                 
                    i-2
    case 2 : i-1 ┌────┐
                 └─══>┘i-3
                 i  i-4      (i overlapped i-4)

    case 3 :    i-4
               ┌──┐ 
               │i<┼─┐
            i-3│ i-5│i-1
               └────┘
                i-2
*/
var isSelfCrossing = function(x) {
    if(x.length < 4){
      return false
    }

    for(let i = 3; i < x.length; i++){
      if(x[i] >= x[i - 2] && x[i - 1] <= x[i - 3]){
        return true
      }

      if(i >= 4 && x[i - 3] === x[i - 1] && x[i] + x[i - 4] >= x[i - 2]){
        return true
      }

      if(i >= 5 && x[i - 2] >= x[i - 4] && x[i] + x[i - 4] >= x[i - 2] && x[i - 1] <= x[i - 3] && x[i - 1] >= x[i - 3] - x[i - 5]){
        return true
      }
    }

    return false
};
// @lc code=end



