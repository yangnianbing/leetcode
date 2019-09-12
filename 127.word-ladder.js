/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (25.15%)
 * Likes:    1786
 * Dislikes: 889
 * Total Accepted:    295K
 * Total Submissions: 1.2M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 * 
 * 
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 * 
 * 
 * Note:
 * 
 * 
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * Output: 5
 * 
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * Output: 0
 * 
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 * 
 * 
 * 
 * 
 * 
 */
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    let wordNextStep = new Set([beginWord]);
    let step = 1;
    let dict = new Set(wordList);
    if(!dict.has(endWord)){
        return 0;
    }

    while(!wordNextStep.has(endWord)){
        let toAdd = new Set();
        for(let word of wordNextStep){
            let chars = word.split('');
            for(let i = 0; i < chars.length; i++){
                let thisChar = chars[i];
                for(let char of 'abcdefghijklmnopqrstuvwxyz'){
                    chars[i] = char;
                    let newWord = chars.join('');
                    if(dict.has(newWord)){
                        toAdd.add(newWord);
                        dict.delete(newWord);
                    }
                }
                chars[i] = thisChar;
            }
        }
        step++;
        if(toAdd.size === 0){
            return 0;
        }
        wordNextStep = toAdd;
    }

    return step;

};

