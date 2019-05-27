/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let numBin = Number(num).toString(2);

    return parseInt(numBin.split('').map((value, index) => value === '0' ? '1' : '0').join(''), 2);
};

