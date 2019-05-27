/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if(!s){
        return false;
    }
    let begin = arguments[1] ? arguments[1] : 0;
    let end = arguments[2] ? arguments[2] : (s.length - 1);

    let delOne = arguments[3] ? arguments[3] : false;
    while(begin < end){
        if(s.charAt(begin) === s.charAt(end)){
            begin++;
            end--;
        }else{
            if(delOne){
                return false;
            }
            return validPalindrome(s, begin+1, end, true) ||
                validPalindrome(s, begin, end-1, true);
        }
    }
    return true;
};


