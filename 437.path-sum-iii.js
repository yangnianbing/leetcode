/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if(root === null){
    return 0;
  }

  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

function dfs(node, sum){
  if(node === null){
    return 0;
  }
  return (node.val === sum ? 1 : 0) + dfs(node.left, sum - node.val) + dfs(node.right, sum - node.val);
  
}

