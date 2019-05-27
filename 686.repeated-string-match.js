/*
 * @lc app=leetcode id=686 lang=javascript
 *
 * [686] Repeated String Match
 *
 * https://leetcode.com/problems/repeated-string-match/description/
 *
 * algorithms
 * Easy (31.38%)
 * Likes:    489
 * Dislikes: 478
 * Total Accepted:    67.4K
 * Total Submissions: 214.7K
 * Testcase Example:  '"abcd"\n"cdabcdab"'
 *
 * Given two strings A and B, find the minimum number of times A has to be
 * repeated such that B is a substring of it. If no such solution, return -1.
 * 
 * For example, with A = "abcd" and B = "cdabcdab".
 * 
 * Return 3, because by repeating A three times (“abcdabcdabcd”), B is a
 * substring of it; and B is not a substring of A repeated two times
 * ("abcdabcd").
 * 
 * Note:
 * The length of A and B will be between 1 and 10000.
 * 
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let lenA = A.length;
    let lenB = B.length;
    let i = Math.ceil(lenB / lenA)

    return A.repeat(i).indexOf(B) != -1 ? i :
            (A.repeat(i+1).indexOf(B) != -1 ? i + 1 : 
            (A.repeat(i + 2).indexOf(B) != -1 ? i + 2 : - 1))
};

