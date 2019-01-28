#
# @lc app=leetcode id=41 lang=python3
#
# [41] First Missing Positive
#
# https://leetcode.com/problems/first-missing-positive/description/
#
# algorithms
# Hard (27.81%)
# Total Accepted:    181K
# Total Submissions: 650.2K
# Testcase Example:  '[1,2,0]'
#
# Given an unsorted integer array, find the smallest missing positive integer.
# 
# Example 1:
# 
# 
# Input: [1,2,0]
# Output: 3
# 
# 
# Example 2:
# 
# 
# Input: [3,4,-1,1]
# Output: 2
# 
# 
# Example 3:
# 
# 
# Input: [7,8,9,11,12]
# Output: 1
# 
# 
# Note:
# 
# Your algorithm should run in O(n) time and uses constant extra space.
# 
#
class Solution:
    # 各司其职，回到正确的位置上面
    def firstMissingPositive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        i = 0
        l = len(nums)
        while i < l:
            if nums[i] >= 1 and nums[i] <= l and nums[nums[i] - 1] != nums[i]:
                j = nums[i] - 1
                tmp = nums[i]
                nums[i] = nums[j]
                nums[j] = tmp
            else:
                i += 1
        i = 0
        while i < l and nums[i] == i + 1:
            i += 1
        
        return i + 1
            
solution = Solution()
solution.firstMissingPositive([3,4,3,1])    