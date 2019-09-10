/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (42.87%)
 * Likes:    1163
 * Dislikes: 68
 * Total Accepted:    249.3K
 * Total Submissions: 578.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
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
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
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
var zigzagLevelOrder = function(root) {
    let num = 0;
    let result = [];
    if(!root){
        return result;
    }
    let level = [root];
    while(level.length !== 0){
        let nextLevel = [];
        let levelValues = [];
        level.forEach(node => {
            levelValues.push(node.val);
            if(node.left){
                nextLevel.push(node.left);
            }
            if(node.right){
                nextLevel.push(node.right);
            }
        })
        if(num % 2 === 1){
            levelValues = levelValues.reverse();
        }
        result.push(levelValues);
        level = nextLevel;
        num++;
    }
    return result;
};



