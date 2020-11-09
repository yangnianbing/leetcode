/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  const findIndex = (arr, value) => {
    let left = 0
    let right = arr.length - 1

    while(left < right){
      let mid = left + ((right - left)>>>1)
      if(arr[mid] < value){
        left = mid + 1
      }else{
        right = mid
      }
    }
    return left
  }
  const a = envelopes.sort((item1, item2) => {
    if(item1[0] === item2[0]){
      return item2[1] - item1[1] > 0 ? 1 : -1
    }else{
      return item1[0] - item2[0] > 0 ? 1 : -1
    }
  })
  

  if(envelopes.length < 2){
    return envelopes.length
  }
  let tail = [envelopes[0][1]]

  for(let i = 1; i < envelopes.length; i++){
    if(envelopes[i][1] > tail[tail.length - 1]){
      tail.push(envelopes[i][1])
    }else{
      tail[findIndex(tail, envelopes[i][1])] = envelopes[i][1]
    }
  }
  return tail.length
};

// @lc code=end



/**
 * [5,4] [6,4] [6,7] [2,3]
 * 
 * [2,3] [5,4], [6,7] [6,4]
 * 
 */
