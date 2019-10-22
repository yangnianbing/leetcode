/*
 * @lc app=leetcode id=214 lang=javascript
 *
 * [214] Shortest Palindrome
 *
 * https://leetcode.com/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (28.05%)
 * Likes:    782
 * Dislikes: 93
 * Total Accepted:    82.6K
 * Total Submissions: 291.7K
 * Testcase Example:  '"aacecaaa"'
 *
 * Given a string s, you are allowed to convert it to a palindrome by adding
 * characters in front of it. Find and return the shortest palindrome you can
 * find by performing this transformation.
 * 
 * Example 1:
 * 
 * 
 * Input: "aacecaaa"
 * Output: "aaacecaaa"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "abcd"
 * Output: "dcbabcd"
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let newS = s + '#' + s.split('').reverse().join('')
    
    let kmp = (str) => {
        let table = new Array(str.length).fill(0);

        let index = 0;
        for(let i = 1; i < str.length; i++){
           if(str.charAt(i) === str.charAt(index)){
               table[i] = table[i - 1] + 1;
               index++;
           }else{
               index = table[i - 1];
               while(index > 0 && str.charAt(i) != str.charAt(index)){
                   index = table[index - 1];
               }

               if(str.charAt(index) === str.charAt(i)){
                   index++;
               }
               table[i] = index;
           }
        }
        return table;
    }
    let table = kmp(newS);

    return s.substring(table[table.length - 1]).split('').reverse().join('') + s;

};


// @lc code=end

