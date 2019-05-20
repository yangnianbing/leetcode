/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let preorder = (node, isLeft) => {
      if(!node){
        if(isLeft){
          return 'lnull';
        }else{
          return 'rnull';
        }
      }
      return '#' + node.val + ' ' + preorder(node.left, true) + ' ' + preorder(node.right, false);
    }

    let sPreOrder = preorder(s);
    let tPreOrder = preorder(t)
    return sPreOrder.indexOf(tPreOrder) !== -1;
};


