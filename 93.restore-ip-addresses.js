/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (30.29%)
 * Total Accepted:    125.2K
 * Total Submissions: 413.5K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];
    helper(s, result, '', 0, 0);

    function helper(s, result, str, index, count){
        if(count > 4){return;}
        if(count === 4 && index === s.length){
            result.push(str);
        }

        for(let i = 1; i <= 4; i++){
            if(index + i > s.length){
                break;
            }
            let subStr = s.substring(index, index + i);
            if((subStr.charAt(0) === '0' && subStr.length > 1) ||
                parseInt(subStr) >= 256){
                    continue;
                }
            helper(s, result, str+subStr+(count==3?"" : "."), index + i, count+1)
        }
    }

    return result;

};
