/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Log Files
 *
 * https://leetcode.com/problems/reorder-log-files/description/
 *
 * algorithms
 * Easy (57.63%)
 * Total Accepted:    7.7K
 * Total Submissions: 13.4K
 * Testcase Example:  '["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]'
 *
 * You have an array of logs.  Each log is a space delimited string of words.
 * 
 * For each log, the first word in each log is an alphanumeric identifier.
 * Then, either:
 * 
 * 
 * Each word after the identifier will consist only of lowercase letters,
 * or;
 * Each word after the identifier will consist only of digits.
 * 
 * 
 * We will call these two varieties of logs letter-logs and digit-logs.  It is
 * guaranteed that each log has at least one word after its identifier.
 * 
 * Reorder the logs so that all of the letter-logs come before any digit-log.
 * The letter-logs are ordered lexicographically ignoring identifier, with the
 * identifier used in case of ties.  The digit-logs should be put in their
 * original order.
 * 
 * Return the final order of the logs.
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
 * Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4
 * 7"]
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 0 <= logs.length <= 100
 * 3 <= logs[i].length <= 100
 * logs[i] is guaranteed to have an identifier, and a word after the
 * identifier.
 * 
 * 
 */
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    logs = logs.map((log, index) => {
        return {
            value:log,
            index: index
        }
    })
    return logs.sort((a, b) => {
        var aParts =  a.value.split(' ');
        var bParts = b.value.split(' ');
        var aIsDigitLog = /[0-9]+/.test(aParts[1]);
        var bIsDigitLog = /[0-9]+/.test(bParts[1]);
        if(aIsDigitLog && bIsDigitLog){
            return a.index > b.index ? 1 : -1;
        }else if(!aIsDigitLog && bIsDigitLog){
            return -1;
        }else if(aIsDigitLog && !bIsDigitLog){
            return 1;
        }else{
            return aParts.slice(1).join(' ') > bParts.slice(1).join(' ') ? 1 : -1;
        }
    }).map(log => log.value);
};
console.log(JSON.stringify(reorderLogFiles(["mt awiizp ubo w", "rs 57969 673 9", "94 zhrucvisya h", "z 3445409 12460", "wj5 5907 615745", "l 4135283 38 90", "sei mybsw gf d", "ja kwygowpegz w", "0z2 1 25410 8 9", "0qj ksxe fb nbl", "21 nadrjznr m v", "o mhvxjq psn tv", "h 8597584 44 07", "qch uaw eezjvaz", "v 38343357670 3"])))

