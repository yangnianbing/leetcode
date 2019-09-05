/*
 * @lc app=leetcode id=1131 lang=javascript
 *
 * [1131] Maximum of Absolute Value Expression
 *
 * https://leetcode.com/problems/maximum-of-absolute-value-expression/description/
 *
 * algorithms
 * Medium (51.41%)
 * Likes:    57
 * Dislikes: 71
 * Total Accepted:    3.3K
 * Total Submissions: 6.4K
 * Testcase Example:  '[1,2,3,4]\n[-1,4,5,6]'
 *
 * Given two arrays of integers with equal lengths, return the maximum value
 * of:
 * 
 * |arr1[i] - arr1[j]| + |arr2[i] - arr2[j]| + |i - j|
 * 
 * where the maximum is taken over all 0 <= i, j < arr1.length.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: arr1 = [1,2,3,4], arr2 = [-1,4,5,6]
 * Output: 13
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: arr1 = [1,-2,-5,0,10], arr2 = [0,-2,-1,-7,-4]
 * Output: 20
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= arr1.length == arr2.length <= 40000
 * -10^6 <= arr1[i], arr2[i] <= 10^6
 * 
 * 
 */
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var maxAbsValExpr = function(arr1, arr2) {
    let max1 = max2 = max3 = max4 = Number.MIN_SAFE_INTEGER;
    let min1 = min2 = min3 = min4 = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < arr1.length; i++){
        max1 = Math.max(max1, arr1[i] + arr2[i] + i);
        min1 = Math.min(min1, arr1[i] + arr2[i] + i);

        max2 = Math.max(max2, arr1[i] + arr2[i] - i);
        min2 = Math.min(min2, arr1[i] + arr2[i] - i);

        max3 = Math.max(max3, arr1[i] - arr2[i] - i);
        min3 = Math.min(min3, arr1[i] - arr2[i] - i);

        max4 = Math.max(max4, arr1[i] - arr2[i] + i);
        min4 = Math.min(min4, arr1[i] - arr2[i] + i);
    }

    let diff1 = max1 - min1;
    let diff2 = max2 - min2;
    let diff3 = max3 - min3;
    let diff4 = max4 - min4;
    return Math.max(diff1, diff2, diff3, diff4);
};


