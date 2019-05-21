/*
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
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
var postorder1 = function(root) {
    if(!root){
      return [];
    }
    

  let walk = (node, result) => {
    if(node){
      node.children.forEach(child => {
        walk(child, result);
      })
      result.push(node.val)
    }
  }

  let result = [];
  walk(root, result);
  return result;

};


var postorder = function(root){
  if(!root){
    return [];
  }

  let result = [];
  let stack = [root];

  while(stack.length !== 0){
    root = stack.pop();
    result.unshift(root.val);
    if(root.children){
      stack = stack.concat(root.children);
    }
  }

  return result;
}
