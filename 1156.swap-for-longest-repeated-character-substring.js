/*
 * @lc app=leetcode id=1156 lang=javascript
 *
 * [1156] Swap For Longest Repeated Character Substring
 *
 * https://leetcode.com/problems/swap-for-longest-repeated-character-substring/description/
 *
 * algorithms
 * Medium (46.63%)
 * Likes:    108
 * Dislikes: 7
 * Total Accepted:    3.9K
 * Total Submissions: 8.4K
 * Testcase Example:  '"ababa"'
 *
 * Given a string text, we are allowed to swap two of the characters in the
 * string. Find the length of the longest substring with repeated
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: text = "ababa"
 * Output: 3
 * Explanation: We can swap the first 'b' with the last 'a', or the last 'b'
 * with the first 'a'. Then, the longest repeated character substring is "aaa",
 * which its length is 3.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: text = "aaabaaa"
 * Output: 6
 * Explanation: Swap 'b' with the last 'a' (or the first 'a'), and we get
 * longest repeated character substring "aaaaaa", which its length is 6.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: text = "aaabbaaa"
 * Output: 4
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: text = "aaaaa"
 * Output: 5
 * Explanation: No need to swap, longest repeated character substring is
 * "aaaaa", length is 5.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: text = "abcdef"
 * Output: 1
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= text.length <= 20000
 * text consist of lowercase English characters only.
 * 
 */
/**
 * @param {string} text
 * @return {number}
 */
var maxRepOpt2 = function(text) {
    let map = {};

    text.split('').forEach(chr => {
        if(map[chr]){
            map[chr]++;
        }else{
            map[chr] = 1;
        }
    })

    let start = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while(start < text.length){
        let chr = text.charAt(start);
        let i = start + 1;
        let count = 1;
        let counterGap = false;
        while(text.charAt(i) === chr){
            count++;
            i++;
        }
        start = i;
        if(counterGap === false && text.charAt(++i) === chr){
            while(text.charAt(i) === chr){
                count++;
                i++;
            }
        }
        if(count < map[chr]){
            count++;
        }
        max = Math.max(max, count);
    }
    return max;

};

var maxRepOpt1 = function(text){
    let charPos = Array.from({length: 26}, () => []);
    let aCharCode = 'a'.charCodeAt(0);
    for(let i = 0, len = text.length; i < len; i++){
        charPos[text.charCodeAt(i) - aCharCode].push(i);
    }

    let postions;
    let max = 1;
    for(let i = 0; i < 26; i++){
        postions = charPos[i];

        let curCount = 1,
            totalCount = 0,
            prevCount = 0;

        for(let i = 1; i < postions.length; i++){
            if(postions[i] === (postions[i - 1] + 1)){
                curCount++;
            }else{
                prevCount = (postions[i] === (postions[i - 1] + 2)) ? curCount : 0;
                curCount = 1; 
            }
            totalCount = Math.max(totalCount, curCount + prevCount);
        }

        max = Math.max(max, totalCount + (totalCount < postions.length ? 1 : 0));
    }
    return max;
    
}

