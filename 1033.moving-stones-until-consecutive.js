/*
 * @lc app=leetcode id=1033 lang=javascript
 *
 * [1033] Moving Stones Until Consecutive
 */
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let [x, y, z] = [a, b, c].sort((a, b) => a > b ? 1 : -1);

    let min = (y - x === 2 || z - y === 2) ? 1 : ((y - x > 1) ? 1 : 0) + ((z - y) > 1 ? 1 : 0) ;

    let max = y - x - 1 + z - y - 1;
    return [min, max];
};

