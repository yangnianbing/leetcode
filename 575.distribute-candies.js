/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let halfOfCandiesNum = candies.length / 2;

    let kindOfCandies = new Set(candies);
    return Math.min(halfOfCandiesNum,  kindOfCandies.size)
};

