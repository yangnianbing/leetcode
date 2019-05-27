/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
 *
 * https://leetcode.com/problems/longest-univalue-path/description/
 *
 * algorithms
 * Easy (33.73%)
 * Likes:    965
 * Dislikes: 218
 * Total Accepted:    58.6K
 * Total Submissions: 173.8K
 * Testcase Example:  '[5,4,5,1,1,5]'
 *
 * Given a binary tree, find the length of the longest path where each node in
 * the path has the same value. This path may or may not pass through the
 * root.
 * 
 * The length of path between two nodes is represented by the number of edges
 * between them.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         1   1   5
 * 
 * 
 * Output: 2
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 
 * 
 * ⁠             1
 * ⁠            / \
 * ⁠           4   5
 * ⁠          / \   \
 * ⁠         4   4   5
 * 
 * 
 * Output: 2
 * 
 * 
 * 
 * Note: The given binary tree has not more than 10000 nodes. The height of the
 * tree is not more than 1000.
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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let max = 0;
    let walk = (node) => {
        if(!node){
            return 0;
        }
        let leftLen = walk(node.left);
        let rightLen = walk(node.right);

        let leftContiune = rightContinue = 0;
        if(node.left && node.left.val === node.val){
            leftContiune = leftLen + 1;
        }
        if(node.right && node.right.val === node.val){
            rightContinue = rightLen + 1;
        }
        max = Math.max(max, leftContiune + rightContinue);
        return Math.max(leftContiune, rightContinue);

    }
    walk(root);
    return max;
};

