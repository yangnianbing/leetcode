/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.49%)
 * Total Accepted:    107.9K
 * Total Submissions: 217.8K
 * Testcase Example:  '"a"\n"b"'
 *
 * 
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom 
 * note can be constructed from the magazines ; otherwise, it will return
 * false. 
 * 
 * 
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 * 
 * 
 * Note:
 * You may assume that both strings contain only lowercase letters.
 * 
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteMap = toMap(ransomNote);
    let magazineMap = toMap(magazine);

    for(let e in ransomNoteMap){
        if(!magazineMap[e] || magazineMap[e] < ransomNoteMap[e]){
            return false;
        }
    }
    return true;
};

function toMap(str){
    let map = {};

    str.split('').forEach(e => {
        if(map[e]){
            map[e]++;
        }else{
            map[e] = 1;
        }
    });

    return map;
}

