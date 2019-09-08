/*
 * @lc app=leetcode id=1110 lang=javascript
 *
 * [1110] Delete Nodes And Return Forest
 *
 * https://leetcode.com/problems/delete-nodes-and-return-forest/description/
 *
 * algorithms
 * Medium (63.13%)
 * Likes:    251
 * Dislikes: 5
 * Total Accepted:    11.1K
 * Total Submissions: 17.6K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n[3,5]'
 *
 * Given the root of a binary tree, each node in the tree has a distinct
 * value.
 * 
 * After deleting all nodes with a value in to_delete, we are left with a
 * forest (a disjoint union of trees).
 * 
 * Return the roots of the trees in the remaining forest.  You may return the
 * result in any order.
 * 
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
 * Output: [[1,2,null,4],[6],[7]]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * The number of nodes in the given tree is at most 1000.
 * Each node has a distinct value between 1 and 1000.
 * to_delete.length <= 1000
 * to_delete contains distinct values between 1 and 1000.
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let result = []

    helper(root, true, to_delete, result);

    return result;

    function helper(node, isRoot, to_delete, result){
        if(!node){
            return null;
        }

        let deleted = to_delete.indexOf(node.val) !== -1;
        if(isRoot && !deleted){
            result.push(node);
        }
        node.left = helper(node.left, deleted, to_delete, result);
        node.right = helper(node.right, deleted, to_delete, result);

        return deleted ? null : node;
    }

};

