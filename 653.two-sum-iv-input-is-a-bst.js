/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let values = [];
  let inorder = (node, values) => {
    if(!node)return;

    inorder(node.left, values);
    values.push(node.val);
    inorder(node.right, values);
  }


  inorder(root, values);

  for(let i = 0, j = values.length - 1; i < j;){
    let sum = values[i] + values[j];
    if(sum === k){
      return true;
    }else if(sum < k){
      i++;
    }else if(sum > k){
      j--;
    }
  }
  return false;
};



