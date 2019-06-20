/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let parentMap = {};
  let depthMap = {};
  let dfs = (node, parent, level) => {
    if(node != null){
      parentMap[node.val] = parent;
      depthMap[node.val] = level;

      dfs(node.right, node, level + 1);
      dfs(node.left, node, level + 1);
    }
  }

  dfs(root, null, 0);

  return depthMap[x] === depthMap[y] &&
        parentMap[x] !== parentMap[y]
};

