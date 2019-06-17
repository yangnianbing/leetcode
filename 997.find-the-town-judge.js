/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(trust.length < (N - 1)){
      return -1;
    }
    let trustMap = {};
    let beenTrust = {};
    for(let i = 1; i <= N; i++){
      trustMap[i] = [];
      beenTrust[i] = [];
    }
    trust.forEach(t => {
      trustMap[t[0]].push(t[1]);
      beenTrust[t[1]].push(t[0]);
    })
    let candidates = [];
    for(let i = 1; i <= N; i++){
      if(trustMap[i].length === 0 && beenTrust[i].length === (N - 1)){
        candidates.push(i);
      }
    }

    return candidates.length === 1 ? candidates[0] : -1;
};


