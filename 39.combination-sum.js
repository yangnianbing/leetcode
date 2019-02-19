/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (45.59%)
 * Total Accepted:    286.6K
 * Total Submissions: 628.5K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
            dp(candidates, newTarget - candidates[i], i, newCurrent, result);
            i++;
        }
    }
};


