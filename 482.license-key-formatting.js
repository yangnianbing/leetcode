/*
 * @lc app=leetcode id=482 lang=javascript
 *
 * [482] License Key Formatting
 */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let group = [];
    let thisGroup = '';
    let SEPERATE = '-'

    for(let i = S.length - 1; i >= 0; i--){
      if(S.charAt(i) !== SEPERATE){
        thisGroup = S.charAt(i).toUpperCase() + thisGroup;
        if(thisGroup.length === K){
          group.unshift(thisGroup);
          thisGroup = '';
        }
      }
    }

    if(thisGroup.length > 0){
      group.unshift(thisGroup);
    }

    return group.join(SEPERATE)
};


