#
# @lc app=leetcode id=29 lang=python3
#
# [29] Divide Two Integers
#
# https://leetcode.com/problems/divide-two-integers/description/
#
# algorithms
# Medium (15.88%)
# Total Accepted:    170.3K
# Total Submissions: 1.1M
# Testcase Example:  '10\n3'
#
# Given two integers dividend and divisor, divide two integers without using
# multiplication, division and mod operator.
# 
# Return the quotient after dividing dividend by divisor.
# 
# The integer division should truncate toward zero.
# 
# Example 1:
# 
# 
# Input: dividend = 10, divisor = 3
# Output: 3
# 
# Example 2:
# 
# 
# Input: dividend = 7, divisor = -3
# Output: -2
# 
# Note:
# 
# 
# Both dividend and divisor will be 32-bit signed integers.
# The divisor will never be 0.
# Assume we are dealing with an environment which could only store integers
# within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
# this problem, assume that your function returns 231 − 1 when the division
# result overflows.
# 
# 
#
# 二进制除法
class Solution:
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        # this is necessary; otherwise phase 1 never terminates
        if dividend == 0: return 0

        # initialize
        i, result, p, q = map(abs, (0, 0, dividend, divisor))

        # phase 1
        while q << i <= p: 
            i += 1

        # phase 2
        for j in reversed(range(i)):
            if q << j <= p: 
                p, result = p - (q << j), result + (1 << j)

        # stupid leetcode restrictions
        if (dividend > 0) != (divisor > 0) or result < -1 << 31: result = -result
        return min(result, (1 << 31) - 1)
        
