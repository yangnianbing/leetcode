/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let min = Number.MAX_VALUE;
  let prev = null;
  let walk = node => {
    if(node === null){
      return min;
    }

    walk(node.left);
    if(prev != null){
      min = Math.min(min, node.val - prev);
    }
    prev = node.val;
    walk(node.right);
  }
  walk(root);
  return min;
};

