/*
 * @lc app=leetcode id=717 lang=javascript
 *
 * [717] 1-bit and 2-bit Characters
 */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = bits.length - 2;
    while(i >= 0 && bits[i] === 1){
      i--;
    }
    return (bits.length - i) % 2 === 0
};

