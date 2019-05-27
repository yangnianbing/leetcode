/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
      return 0;
    }
    var level = 1;
    let children = root.children;
    while(children.length != 0){
      level++;

      let nextLevelChild = [];
      children.forEach(node => {
        if(node.children && node.children.length != 0){
          nextLevelChild = nextLevelChild.concat(node.children);
        }
      })
      children = nextLevelChild;
    }

    return level;
    
};

