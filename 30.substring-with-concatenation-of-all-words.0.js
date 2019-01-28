/*
 * @lc app=leetcode id=30 lang=javascript
 *
 * [30] Substring with Concatenation of All Words
 *
 * https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (22.80%)
 * Total Accepted:    118.1K
 * Total Submissions: 517.3K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * You are given a string, s, and a list of words, words, that are all of the
 * same length. Find all starting indices of substring(s) in s that is a
 * concatenation of each word in words exactly once and without any intervening
 * characters.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * Output: [0,9]
 * Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar"
 * respectively.
 * The output order does not matter, returning [9,0] is fine too.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * Output: []
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    var strLen = s.length;
    var wordLen = words.length;
    var answer = [];
    if(strLen <= 0 || wordLen <= 0){
        return answer;
    }
    var map = {};
    for(var i = 0; i < wordLen; i++){
        map[words[i]] && map[words[i]]++ || (map[words[i]] = 1)
    }

    var oneWordLen = words[0].length;
    for(var i = 0; i < oneWordLen; ++i){
        var left = i,
            subMap = {},
            count = 0;

        for(var j = i; j <= strLen - oneWordLen + 1; j += oneWordLen){
            var thisWord = s.slice(j, oneWordLen + j);
            if(map[thisWord]){
                count++;
                if(subMap[thisWord]){
                    subMap[thisWord]++;
                }else{
                    subMap[thisWord] = 1;
                }

                while(subMap[thisWord] > map[thisWord]){
                    subMap[s.slice(left, left + oneWordLen)]--;
                    left += oneWordLen;
                    count--;
                }

                if(count === wordLen){
                    answer.push(left)
                }
            }else{
                subMap = {};
                count = 0;
                left = j + oneWordLen;
            }
        }
    }
    return answer;
};

findSubstring('abaababbaba', ["ab","ba","ab","ba"])   