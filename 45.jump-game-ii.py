#
# @lc app=leetcode id=45 lang=python3
#
# [45] Jump Game II
#
# https://leetcode.com/problems/jump-game-ii/description/
#
# algorithms
# Hard (26.98%)
# Total Accepted:    147.3K
# Total Submissions: 546.1K
# Testcase Example:  '[2,3,1,1,4]'
#
# Given an array of non-negative integers, you are initially positioned at the
# first index of the array.
# 
# Each element in the array represents your maximum jump length at that
# position.
# 
# Your goal is to reach the last index in the minimum number of jumps.
# 
# Example:
# 
# 
# Input: [2,3,1,1,4]
# Output: 2
# Explanation: The minimum number of jumps to reach the last index is 2.
# ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
# 
# Note:
# 
# You can assume that you can always reach the last index.
# 
#
class Solution:
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxVal = nextMax = jumps = 0

        for i, val in enumerate(nums):
            if maxVal >= len(nums) - 1:
                break
            
            nextMax = max(i + val, nextMax)
            if i == maxVal:
                maxVal = nextMax
                jumps += 1

        return jumps
