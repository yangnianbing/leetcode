/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let prev = null;

  let walk = node => {
    if(!node){
      return;
    }
    walk(node.right);

    if(prev !== null){
      node.val += prev;
    }
    prev = node.val;

    walk(node.left);
  }

  walk(root);

  return root;
};

