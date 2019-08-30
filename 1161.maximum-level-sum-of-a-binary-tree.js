/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
 *
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (73.80%)
 * Likes:    62
 * Dislikes: 5
 * Total Accepted:    7.4K
 * Total Submissions: 10.1K
 * Testcase Example:  '[1,7,0,7,-8,null,null]'
 *
 * Given the root of a binary tree, the level of its root is 1, the level of
 * its children is 2, and so on.
 * 
 * Return the smallest level X such that the sum of all the values of nodes at
 * level X is maximal.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: [1,7,0,7,-8,null,null]
 * Output: 2
 * Explanation: 
 * Level 1 sum = 1.
 * Level 2 sum = 7 + 0 = 7.
 * Level 3 sum = 7 + -8 = -1.
 * So we return the level with the maximum sum which is level 2.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * The number of nodes in the given tree is between 1 and 10^4.
 * -10^5 <= node.val <= 10^5
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
 * @return {number}
 */
var maxLevelSum = function(root) {
    let levelNodes = [root];

    let max = Number.MIN_SAFE_INTEGER;
    let index = -1;
    let sum;
    let nextLevelNodes;
    let level = 0;
    while(levelNodes.length != 0){
        level++;
        sum = 0;
        nextLevelNodes = [];
        levelNodes.forEach(node => {
            sum += node.val;
            if(node.left){
                nextLevelNodes.push(node.left);
            }
            if(node.right){
                nextLevelNodes.push(node.right);
            }

        })
        if(sum > max){
            max = sum;
            index = level;
        }
        levelNodes = nextLevelNodes;
    }
    return index;
};


