#
# @lc app=leetcode id=223 lang=python3
#
# [223] Rectangle Area
#
# https://leetcode.com/problems/rectangle-area/description/
#
# algorithms
# Medium (35.27%)
# Total Accepted:    81.8K
# Total Submissions: 231.8K
# Testcase Example:  '-3\n0\n3\n4\n0\n-1\n9\n2'
#
# Find the total area covered by two rectilinear rectangles in a 2D plane.
# 
# Each rectangle is defined by its bottom left corner and top right corner as
# shown in the figure.
# 
# 
# 
# Example:
# 
# 
# Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
# Output: 45
# 
# Note:
# 
# Assume that the total area is never beyond the maximum possible value of int.
# 
#
class Solution:
    def computeArea(self, A, B, C, D, E, F, G, H):
        """
        :type A: int
        :type B: int
        :type C: int
        :type D: int
        :type E: int
        :type F: int
        :type G: int
        :type H: int
        :rtype: int
        """
        area1 = (C - A) * (D - B)
        area2 = (G - E) * (H - F)
        share = max(0, min(C,G)-max(A,E)) * max(0, min(D,H)-max(B,F))
        return area1 + area2 - share