/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (41.09%)
 * Total Accepted:    149.8K
 * Total Submissions: 363.7K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * Example 1:
 * 
 * 
 * Input: "hello"
 * Output: "holle"
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "leetcode"
 * Output: "leotcede"
 * 
 * 
 * Note:
 * The vowels does not include the letter "y".
 * 
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let left = 0,
        chars = s.split('');
        right = chars.length - 1;
        
    while(left < right){
        while(vowels.indexOf(chars[left].toLowerCase()) === -1 && left < right){
            left++
        }
        while(vowels.indexOf(chars[right].toLowerCase()) === -1 && right > left){
            right--;
        }
        if(left < right){
            [chars[left], chars[right]]= [chars[right], chars[left]]
            left++;
            right--;
        }
    }
    return chars.join('');
};
reverseVowels('.,')

