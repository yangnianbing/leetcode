#
# @lc app=leetcode id=79 lang=python3
#
# [79] Word Search
#
# https://leetcode.com/problems/word-search/description/
#
# algorithms
# Medium (29.87%)
# Total Accepted:    237.1K
# Total Submissions: 793.6K
# Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
#
# Given a 2D board and a word, find if the word exists in the grid.
# 
# The word can be constructed from letters of sequentially adjacent cell, where
# "adjacent" cells are those horizontally or vertically neighboring. The same
# letter cell may not be used more than once.
# 
# Example:
# 
# 
# board =
# [
# ⁠ ['A','B','C','E'],
# ⁠ ['S','F','C','S'],
# ⁠ ['A','D','E','E']
# ]
# 
# Given word = "ABCCED", return true.
# Given word = "SEE", return true.
# Given word = "ABCB", return false.
# 
# 
#
class Solution:
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        if not board:
            return False
        
        for i in range(len(board)):
            for j in range(len(board[i])):
                if self.dfs(board, i, j, word, 0):
                    return True

        return False

    def dfs(self, board, y, x, word, index):
        if index == len(word):
            return True
        if y < 0 or x < 0 or y == len(board) or x == len(board[y]) or board[y][x] != word[index]:
            return False
        
        board[y][x] = 0

        wheatherExist = self.dfs(board, y, x+1, word, index+1) \
        or self.dfs(board, y, x - 1, word, index+1) \
        or self.dfs(board, y+1, x, word, index+1) \
        or self.dfs(board, y-1, x, word, index+1) \

        board[y][x] = word[index]
        return wheatherExist
            
