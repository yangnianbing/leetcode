/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if(N <= 1){
    return N;
  }
  let a = 0,
      b = 1;
  while(N > 1){
    let sum = a + b;
    a = b;
    b = sum;
    N--;
  }

  return b;

};

