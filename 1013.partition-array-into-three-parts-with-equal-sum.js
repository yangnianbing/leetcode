/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */


var canThreePartsEqualSum  = function(A) {
  let sum = A.reduce((a, b) => a + b);
  if(sum % 3 != 0){
    return false;
  }
  let target = sum / 3;

  let parts = 0;

  for(let i = 0, sum = 0; i < A.length && parts < 2; i++){
    sum += A[i];
    if(sum === target){
      sum = 0;
      parts++;
    }
  }

  return parts === 2;
}
