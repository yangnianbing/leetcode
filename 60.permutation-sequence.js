/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (31.69%)
 * Total Accepted:    124.5K
 * Total Submissions: 392.3K
 * Testcase Example:  '3\n3'
 *
 * The set [1,2,3,...,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order, we get the
 * following sequence for n = 3:
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * Given n and k, return the kth permutation sequence.
 * 
 * Note:
 * 
 * 
 * Given n will be between 1 and 9 inclusive.
 * Given k will be between 1 and n! inclusive.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: n = 3, k = 3
 * Output: "213"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: n = 4, k = 9
 * Output: "2314"
 * 
 * 
 */
/**
 * 1 2 3 4
 * 1 2 4 3
 * 1 3 2 4
 * 1 3 4 2
 * 1 4 2 3
 * 1 4 3 2
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let cache = [1, 1];

    for(let i = 2; i <= n; i++){
        cache[i] = cache[i - 1] * i;
    }

    let result = [];
    let nums = Array.from({length: n}, function(value, index){return index + 1});
    k--;
    for(let i = 0; i < n; i++){
        let index = parseInt(k / cache[n - i - 1]);
        k = k % cache[n - i - 1];
        result[i] = nums[index];
        nums.splice(index, 1);
    }

    return result.join('');
    
};

