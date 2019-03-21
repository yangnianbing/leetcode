/*
 * @lc app=leetcode id=223 lang=javascript
 *
 * [223] Rectangle Area
 *
 * https://leetcode.com/problems/rectangle-area/description/
 *
 * algorithms
 * Medium (35.27%)
 * Total Accepted:    81.8K
 * Total Submissions: 231.8K
 * Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
 *
 * Find the total area covered by two rectilinear rectangles in a 2D plane.
 * 
 * Each rectangle is defined by its bottom left corner and top right corner as
 * shown in the figure.
 * 
 * 
 * 
 * Example:
 * 
 * 
 * Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
 * Output: 45
 * 
 * Note:
 * 
 * Assume that the total area is never beyond the maximum possible value of
 * int.
 * 
 */
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var area1 = (C - A) * (D - B);
    var area2 = (G - E) * (H - F);

    var share = Math.max(0, Math.min(C,G)-Math.max(A,E)) * Math.max(0, Math.min(D,H)-Math.max(B,F))
    return area1 + area2 - share
};
