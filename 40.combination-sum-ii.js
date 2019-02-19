/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (39.58%)
 * Total Accepted:    198.2K
 * Total Submissions: 496.6K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => {
        return a > b ? 1 : (a === b ? 0 : -1);
    });
    dp(candidates, target, 0, [], result);
    return result;


    function dp(candidates, newTarget, i, current, result){
        if(newTarget === 0){
            result.push(current);
            return;
        }
        while(i <= candidates.length - 1 && candidates[i] <= newTarget){
            let newCurrent = current.slice(0);
            newCurrent.push(candidates[i]);
            dp(candidates, newTarget - candidates[i], i + 1, newCurrent, result);
            i++;
            //combination-sum-ii和combination-sum不同的地方就在于ii中的数字是有重复的，为了给结果去重，所以要加一个循环
            while(i <= candidates.length - 1 && candidates[i] === candidates[i - 1]){
                i++;
            }
        }
    }
};
