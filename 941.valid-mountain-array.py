#
# @lc app=leetcode id=941 lang=python
#
# [941] Valid Mountain Array
#
# https://leetcode.com/problems/valid-mountain-array/description/
#
# algorithms
# Easy (34.93%)
# Total Accepted:    9.7K
# Total Submissions: 27.8K
# Testcase Example:  '[2,1]'
#
# Given an array A of integers, return true if and only if it is a valid
# mountain array.
# 
# Recall that A is a mountain array if and only if:
# 
# 
# A.length >= 3
# There exists some i with 0 < i < A.length - 1 such that:
# 
# A[0] < A[1] < ... A[i-1] < A[i] 
# A[i] > A[i+1] > ... > A[B.length - 1]
# 
# 
# 
# 
# 
# 
# Example 1:
# 
# 
# Input: [2,1]
# Output: false
# 
# 
# 
# Example 2:
# 
# 
# Input: [3,5,5]
# Output: false
# 
# 
# 
# Example 3:
# 
# 
# Input: [0,3,2,1]
# Output: true
# 
# 
# 
# 
# 
# Note:
# 
# 
# 0 <= A.length <= 10000
# 0 <= A[i] <= 10000 
# 
# 
# 
# 
# 
# 
# 
# 
# 
#
class Solution(object):
    def validMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: bool
        """
        transitionPoint = False
        aLen = len(A)
        if aLen < 3:
            return False
        for i in range(1, aLen - 1):
            if transitionPoint == False and A[i] <= A[i - 1] :
                return False
            if transitionPoint == True and A[i] <= A[i+1]:
                return False
            if(transitionPoint == False and A[i] > A[i-1] and A[i] > A[i+1]):
                transitionPoint = True

        return transitionPoint

