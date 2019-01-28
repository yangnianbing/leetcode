#
# @lc app=leetcode id=23 lang=python3
#
# [23] Merge k Sorted Lists
#
# https://leetcode.com/problems/merge-k-sorted-lists/description/
#
# algorithms
# Hard (32.06%)
# Total Accepted:    317.7K
# Total Submissions: 991K
# Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
#
# Merge k sorted linked lists and return it as one sorted list. Analyze and
# describe its complexity.
# 
# Example:
# 
# 
# Input:
# [
# 1->4->5,
# 1->3->4,
# 2->6
# ]
# Output: 1->1->2->3->4->4->5->6
# 
# 
#
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
import sys
class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        def minNode(array):
            minNode = ListNode(sys.maxsize)
            minNodeIndex = -1
            for i in range(len(array)):
                if array[i].val < minNode.val:
                    minNode = array[i]
                    minNodeIndex = i
            
            if(not minNode.next):
                del array[minNodeIndex]
            else:
                array[minNodeIndex] = minNode.next
            return minNode

        if len(lists) == 0:
            return None
        dummy = ListNode(sys.maxsize)
        header = dummy
        lists = [x for x in lists if x]
        while len(lists) != 0:
            header.next = minNode(lists)
            header = header.next

        return dummy.next

        
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None      
solution = Solution()
listNode1 = ListNode(1)
listNode2 = ListNode(4)
listNode3 = ListNode(5)
listNode1.next = listNode2
listNode2.next = listNode3

listNode4 = ListNode(1)
listNode5 = ListNode(3)
listNode6 = ListNode(4)
listNode4.next = listNode5
listNode5.next = listNode6
solution.mergeKLists([listNode1, listNode4])