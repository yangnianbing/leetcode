/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (29.77%)
 * Total Accepted:    330.6K
 * Total Submissions: 1.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * Example 1:
 * 
 * 
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "race a car"
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0,
        leftChar,
        right = s.length - 1,
        rightChar;

    while(left <= right){
        leftChar = s[left],
        rightChar = s[right];

        if(!isCharOrDigit(leftChar)){
            left++;
        }else if(!isCharOrDigit(rightChar)){
            right--;
        }else{
            if(leftChar.toLowerCase() != rightChar.toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
    }
    return true;
};

function isCharOrDigit(s){
    return /[0-9a-zA-Z]/.test(s)
}

isPalindrome('A man, a plan, a canal: Panama')
