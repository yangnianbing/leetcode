/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
var diameterOfBinaryTree = function(root) {
  if(!root){return 0;}
  let max = 0;
  let maxLevel = node => {
    if(node === null){
      return 0;
    }
    let left = maxLevel(node.left);
    let right = maxLevel(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }    

  maxLevel(root);
  return max;
  
};



