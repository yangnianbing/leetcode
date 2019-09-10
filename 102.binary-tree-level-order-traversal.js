/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (49.75%)
 * Likes:    1748
 * Dislikes: 45
 * Total Accepted:    427.8K
 * Total Submissions: 855.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
 * 
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if(!root){
        return result;
    }
    let level = [root];

    while(level.length != 0){
        let levelValues = level.map(node => node.val);
        result.push(levelValues);

        let nextLevelNode = [];
        level.forEach(node => {
            if(node.left){
                nextLevelNode.push(node.left);
            }
            if(node.right){
                nextLevelNode.push(node.right);
            }
        })
        level = nextLevelNode;
    }

    return result;
};

