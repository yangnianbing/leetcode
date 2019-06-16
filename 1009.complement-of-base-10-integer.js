/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */
/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let binStr = Number(N).toString(2);
    return parseInt(binStr.split('').map(c => c === '1' ? '0' : '1').join(''), 2);
};

