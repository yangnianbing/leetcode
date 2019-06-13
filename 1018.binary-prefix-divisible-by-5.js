/*
 * @lc app=leetcode id=1018 lang=javascript
 *
 * [1018] Binary Prefix Divisible By 5
 */
/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
   let result = [];
   for(let i= 1; i < A.length; i++){
    A[i] += A[i - 1] * 2 % 5;
   }

   return A.map(a => a % 5 === 0 ? true : false)
};

