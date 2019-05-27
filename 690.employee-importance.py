#
# @lc app=leetcode id=690 lang=python3
#
# [690] Employee Importance
#
"""
# Employee info
class Employee:
    def __init__(self, id, importance, subordinates):
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates
"""
class Solution:
    def getImportance(self, employees, id):
        """
        :type employees: Employee
        :type id: int
        :rtype: int
        """
        d = dict()
        for node in employees:
            d[node.id] = node

        def Importance(node):
            if len(node.subordinates) == 0:
                return node.importance
            else:
                S = node.importance
                for _id in node.subordinates:
                    S += Importance(d[_id])
                return S
        return Importance(d[id])

        

