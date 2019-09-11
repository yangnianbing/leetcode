/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (41.83%)
 * Likes:    1059
 * Dislikes: 38
 * Total Accepted:    254.6K
 * Total Submissions: 604.9K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 * 
 * 
 * Return:
 * 
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum1 = function(root, sum) {
    let result = [];
    function next(node, sum, path){
        if(!node){return};
        sum -= node.val;
        path.push(node.val);

        if(!node.left && !node.right){
            if(sum === 0){
                result.push(path);
            }
            return;
        }
        
        next(node.right, sum, Object.assign([], path))
        next(node.left, sum, Object.assign([], path))
    }
    next(root, sum, []);
    return result;
};


var pathSum = function(root, sum){
    if(root === null){
        return [];
    }

    if(root.left === null && 
        root.right === null &&
         root.val === sum){
             return [[root.val]];
         }

    let left = root.left ? pathSum(root.left, sum - root.val) : [];
    let right = root.right ? pathSum(root.right, sum - root.val) : [];

    let paths = [];
    left.forEach(path => paths.push([root.val].concat(path)));
    right.forEach(path => paths.push([root.val].concat(path)));

    return paths;

}


