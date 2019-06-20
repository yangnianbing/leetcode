/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    A.sort((a, b) => Math.abs(a) < Math.abs(b) ? -1 : 1);

    return A.map(a => a * a)
};

