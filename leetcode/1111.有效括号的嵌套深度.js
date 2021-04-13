/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    let result = new Array(seq.length)

    let idx = 0
    for(let i of seq){
      result[idx++] = i == '(' ? idx & 1 : ((idx + 1) & 1);
    }

    return result
};
// @lc code=end

