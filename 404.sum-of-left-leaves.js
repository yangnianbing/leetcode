/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
var sumOfLeftLeaves = function(root) {
  let leftNodeValue = [0];
  walk(root, false, leftNodeValue);
  
  return leftNodeValue.reduce((a, b) => a + b);
};

function walk(node, isLeft, leftNodeValue){
  if(!node){
    return;
  }
  if(node.left === null && node.right === null && isLeft){
    leftNodeValue.push(node.val);
  }
  walk(node.left, true, leftNodeValue);
  walk(node.right, false, leftNodeValue);
}


