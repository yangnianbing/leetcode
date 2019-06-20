/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let carry = 0;
    let i = A.length - 1;
    let result = [];
   
    while(i >= 0 || K > 0){
      let sum = carry;

      if(i >= 0){
        sum += A[i];
      }

      if( K > 0){
        sum += K % 10;
      }

      result.unshift(sum % 10);
      carry = parseInt(sum / 10);

      i--;
      K = parseInt(K / 10);
    }

    if(carry){
      result.unshift(carry);
    }

    return result;
};

