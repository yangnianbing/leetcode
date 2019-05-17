/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let sortG = g.sort((a, b) => a > b ? 1 : (a === b ? 0 : -1));
    let sortS = s.sort((a, b) => a > b ? 1 : (a === b ? 0 : -1));

    let i = j = 0;
    let result = 0;
    while(i < sortG.length && j < sortS.length){
      if(sortS[j] < sortG[i]){
        j++;
      }else if(sortS[j] >= sortG[i]){
        i++;
        j++;
        result++;
      }
    }
    return result;
};

