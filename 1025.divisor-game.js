/*
 * @lc app=leetcode id=1025 lang=javascript
 *
 * [1025] Divisor Game
 */
/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    return N % 2 === 0;
};

//if N is even
//Alice can aways choose x as 1 and bob get odd
//when bob get odd, the x must be odd because N % x === 0。 and then Alice get even again. when alice get number 2, he win.


