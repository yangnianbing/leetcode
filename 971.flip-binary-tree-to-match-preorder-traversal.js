/*
 * @lc app=leetcode id=971 lang=javascript
 *
 * [971] Flip Binary Tree To Match Preorder Traversal
 *
 * https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/description/
 *
 * algorithms
 * Medium (39.50%)
 * Total Accepted:    2.3K
 * Total Submissions: 5.9K
 * Testcase Example:  '[1,2]\n[2,1]'
 *
 * Given a binary tree with N nodes, each node has a different value from {1,
 * ..., N}.
 * 
 * A node in this binary tree can be flipped by swapping the left child and the
 * right child of that node.
 * 
 * Consider the sequence of N values reported by a preorder traversal starting
 * from the root.  Call such a sequence of N values the voyage of the tree.
 * 
 * (Recall that a preorder traversal of a node means we report the current
 * node's value, then preorder-traverse the left child, then preorder-traverse
 * the right child.)
 * 
 * Our goal is to flip the least number of nodes in the tree so that the voyage
 * of the tree matches the voyage we are given.
 * 
 * If we can do so, then return a list of the values of all nodes flipped.  You
 * may return the answer in any order.
 * 
 * If we cannot do so, then return the list [-1].
 * 
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: root = [1,2], voyage = [2,1]
 * Output: [-1]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * 
 * Input: root = [1,2,3], voyage = [1,3,2]
 * Output: [1]
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * 
 * 
 * Input: root = [1,2,3], voyage = [1,2,3]
 * Output: []
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * 1 <= N <= 100
 * 
 * 
 * 
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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    var step = [];
    if(root && voyage && flip(root, voyage, step)){
        return step;
    }else{
        return [-1];
    }
    

    function flip(node, voyage, step){
        if(node.val != voyage.val){
            return false;
        }

        if(((node.left === null && voyage.right === null) || (node.left != null && voyage.right !== null && node.left.val === voyage.right.val)) &&
            (node.right === null && voyage.left === null) || (node.right != null && voyage.left != null && node.right.val === voyage.left.val)){
                if(node.left || node.right){
                    step.push(node);
                }
                if(node.left != null){
                    var result = flip(node.left, voyage.right, step);
                    if(result === false){
                        return false;
                    }
                }
                if(node.right != null){
                    var result = flip(node.right, voyage.left, step);
                    if(result === false){
                        return false;
                    }
                }
        }
        return true;
    }
};

console.log(JSON.stringify(flipMatchVoyage(
    {  
        val: 1,
        left: {
            val: 2
        },
        right: {
            val: 3
        }
    },
    {
        val: 1,
        left: {
            val: 3
        },
        right: {
            val: 2
        }
    }    
)))
