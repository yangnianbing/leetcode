/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
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
 * @return {number[]}
 */
var preorder = function(root) {
    
    let result = [];
    if(!root){
      return result;
    }
    let stack = [root];
    while(stack.length != 0){
      root = stack.pop();
      result.push(root.val);
      if(root.children){
        stack = stack.concat(root.children.reverse());
      }
    }
    return result;
};

