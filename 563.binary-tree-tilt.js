/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
var findTilt = function(root) {
    let tilt = 0;
    let walk = node => {
      if(node === null){
        return 0;
      }
      let left = walk(node.left);
      let right = walk(node.right);

      tilt += Math.abs(left - right);
      return node.val + left + right;
    }

    walk(root);
    return tilt;
};

