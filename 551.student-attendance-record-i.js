/*
 * @lc app=leetcode id=551 lang=javascript
 *
 * [551] Student Attendance Record I
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let lateNum = 0;
    let absentNum = 0;

    for(let i of s){
      if(i === "A" ){
        absentNum++;
        if(absentNum > 1){
          return false;
        }
      }
      if(i !== 'L'){
        lateNum = 0;
        prev = i;
        continue;
      }
      
      lateNum++;
      if(lateNum > 2){
        return false
      }
    }
    return true;
};


