/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
      return [];
    }
    let result = [];
    let levelNode = [root];

    while(levelNode.length > 0){
      let nextLevelNode = [];
      let levelNodeValue = [];

      levelNode.forEach(node => {
        levelNodeValue.push(node.val);
        if(node.children){
          nextLevelNode = nextLevelNode.concat(node.children);
        }
      })
      result.push(levelNodeValue);
      levelNode = nextLevelNode;
    }

    return result;
};

