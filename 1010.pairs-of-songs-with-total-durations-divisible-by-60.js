/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;

    // for(let i = 0; i < time.length - 1; i++){
    //   for(let j = i+1; j < time.length; j++){
    //     if((time[i] + time[j]) % 60 === 0){
    //       count++;
    //     }
    //   }
    // }
    // return count;

    let map = {};
    for(let i of time){
      if(map[(60 - i % 60) % 60]){
        count += map[(60 - i % 60) % 60];
      }
      map[i % 60] = map[i % 60] ? (map[i % 60] + 1) : 1;
    }

    return count;
};


