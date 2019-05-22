/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let countLevel = (nodes, result) => {
    if(nodes.length === 0){
      return;
    }
    let childNodes = [];
    let total = 0;
    nodes.forEach(node => {
      total += node.val;
      node.left && (childNodes.push(node.left));
      node.right && (childNodes.push(node.right));
    })
    result.push(total / nodes.length);
    countLevel(childNodes, result);
  }
  let result = [];
  countLevel(root ? [root] : [], result);
  return result;
};



