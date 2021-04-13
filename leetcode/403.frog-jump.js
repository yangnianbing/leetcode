/*
 * @lc app=leetcode id=403 lang=javascript
 *
 * [403] Frog Jump
 */

// @lc code=start
/**
 * 如果每次都是跳k+1
 * 那么第j块石头最大跳j+1, <= stones[j] + 1
 * 同时跳的最远的距离应该小于等于stones.length - 1
 * d[i][k]
 * 能否从i前面的石头j通过k步跳到i
 * d[i][k] = d[j][k-1]||d[j][k]||d[j][k+1]
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    let len = stones.length
    let dp = Array.from({length: len}).map(() => new Array(len+1))
    dp[0][0] = true
    for(let i = 1; i < len; i++){
      for(let j = 0; j< i; j++){
        let k = stones[i] - stones[j]
        if(k < len && k <= stones[j] + 1){
          dp[i][k] = dp[j][k-1]||dp[j][k]||dp[j][k+1]
          if(i === len - 1 && dp[i][k] === true){
            return true
          }
        }
      }
    }
    return false
};


// @lc code=end

