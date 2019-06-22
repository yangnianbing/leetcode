/*
 * @lc app=leetcode id=965 lang=javascript
 *
 * [965] Univalued Binary Tree
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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let value = root.val;

    let walk = (node, value) => {
      if(node.val !== value){
        return false;
      }
      return (node.left ? walk(node.left, value) : true) &&
            (node.right ? walk(node.right, value) : true)
    }

    return walk(root, value)
};




