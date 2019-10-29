/*
 * @lc app=leetcode id=282 lang=javascript
 *
 * [282] Expression Add Operators
 *
 * https://leetcode.com/problems/expression-add-operators/description/
 *
 * algorithms
 * Hard (33.36%)
 * Likes:    855
 * Dislikes: 120
 * Total Accepted:    80.3K
 * Total Submissions: 236.6K
 * Testcase Example:  '"123"\n6'
 *
 * Given a string that contains only digits 0-9 and a target value, return all
 * possibilities to add binary operators (not unary) +, -, or * between the
 * digits so they evaluate to the target value.
 * 
 * Example 1:
 * 
 * 
 * Input: num = "123", target = 6
 * Output: ["1+2+3", "1*2*3"] 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: num = "232", target = 8
 * Output: ["2*3+2", "2+3*2"]
 * 
 * Example 3:
 * 
 * 
 * Input: num = "105", target = 5
 * Output: ["1*0+5","10-5"]
 * 
 * Example 4:
 * 
 * 
 * Input: num = "00", target = 0
 * Output: ["0+0", "0-0", "0*0"]
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: num = "3456237490", target = 9191
 * Output: []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    let result = [];

    let helper = (result, path, num, target, pos, eval, multed) => {
        if(pos === num.length){
            if(target === eval){
                result.push(path);
            }
            return;
        }

        for(let i = pos; i < num.length; i++){
            if(i != pos && num.charAt(pos) === '0'){
                break;
            }
            let cur = parseInt(num.substring(pos, i + 1));
            if(pos === 0){
                helper(result, path + cur, num, target, i + 1, cur, cur);
            }else{
                helper(result, path + '+' + cur, num, target, i + 1, eval + cur, cur);
                helper(result, path + '-' + cur, num, target, i + 1, eval - cur, -cur);
                helper(result, path + '*' + cur, num, target, i + 1, eval - multed + multed * cur, multed * cur);
            }
        }
    }

    if(num === null || num.length === 0){
        return result;
    }

    helper(result, '', num, target, 0, 0, 0);
    return result;
};

// @lc code=end

