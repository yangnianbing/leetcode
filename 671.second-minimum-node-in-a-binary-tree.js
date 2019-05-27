/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
var findSecondMinimumValue = function(root) {
    
    let find = (node, min) => {
      if(!node){
        return -1;
      }
      if(node.val > min){
        return node.val;
      }

      let leftMin = find(node.left, min);
      let rightMin = find(node.right, min);

      return (leftMin === - 1 || rightMin === -1) ? Math.max(leftMin, rightMin) : Math.min(leftMin, rightMin);
    }

    if(!root){
      return -1;
    }
    return find(root, root.val);

};

