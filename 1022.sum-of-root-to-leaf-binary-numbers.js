/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function(root) {
    let paths = [];

    let walk = (node, path, paths) => {
      if(!node.left && !node.right){
        paths.push(path);
        return;
      }
      
      node.left && walk(node.left, path + node.left.val + '', paths);
      node.right && walk(node.right, path + node.right.val + '', paths);
    }
    root && walk(root, root.val+'', paths);
    return paths.map(path => parseInt(path, 2)).reduce((a, b) => a + b, 0);
};



