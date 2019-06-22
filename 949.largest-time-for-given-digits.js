/*
 * @lc app=leetcode id=949 lang=javascript
 *
 * [949] Largest Time for Given Digits
 */
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {

    let ans = -1;

    for(let i = 0; i < 4; i++){
      for(let j = 0; j < 4; j++){
        if(j !== i){
          for(let k = 0; k < 4; k++){
            if(k !== j && k !== i){
              let l = 6 - i - j - k;
              let hour = 10 * A[i] + A[j];
              let min = 10 * A[k] + A[l];
              if(hour < 24 && min < 60){
                ans = Math.max(ans, hour * 60 + min)
              }
            }
          }
        }
        
      }
    }

    if(ans === -1){return '';}

    let hour = parseInt(ans / 60);
    hour = hour < 10 ? ('0' + hour) : hour;
    let min = parseInt(ans % 60);
    min = min < 10 ? ('0' + min) : min;
    return `${hour}:${min}`;
};

console.log(largestTimeFromDigits([0,0,0,0]))
