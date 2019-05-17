/*
 * @lc app=leetcode id=461 lang=javascript
 *
 * [461] Hamming Distance
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let xBin = Number(x).toString(2),
      yBin = Number(y).toString(2),
      longStr = xBin.length > yBin.length ? xBin : yBin,
      longStrLen = longStr.length,
      shortStr = xBin.length > yBin.length ? yBin : xBin,
      shortStrLen = shortStr.length,
      result = 0;

  shortStr = new Array(longStrLen - shortStrLen).fill(0).join('') + shortStr

  for(let i = 0; i < longStrLen; i++){
    if(longStr.charAt(i) !== shortStr.charAt(i)){
      result++;
    }
  }
  return result;
};

