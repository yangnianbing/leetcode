/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (42.67%)
 * Likes:    2045
 * Dislikes: 56
 * Total Accepted:    252.8K
 * Total Submissions: 587.6K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = {};
    inorder.forEach((value, index) => {
        map[value] = index;
    })
    return build(preorder);
    function build(preorder){
        if(preorder.length === 0){
            return null;
        }
        let node = {val: preorder[0]};

        let preorderLeft = [];
        let preorderRight = [];

        let index = map[preorder[0]];
        for(let i = 1; i < preorder.length; i++){
            let curIndex = map[preorder[i]];
            if(curIndex < index){
                preorderLeft.push(preorder[i]);
            }else{
                preorderRight.push(preorder[i]);
            }
        }
        node.left = build(preorderLeft);
    
        node.right = build(preorderRight);
    
        return node;
    }
};

var buildTree = function(preorder, inorder){
    let map = {};
    inorder.forEach((value, index) => {
        map[value] = index;
    })

    let preIndex = 0;
    function build(left, right){
        if(left === right){
            return null;
        }

        let nodeValue = preorder[preIndex++];
        let node = {val: nodeValue};
        let index = map[nodeValue];
        node.left = build(left, index);
        node.right = build(index + 1, right);
        return node;
    }
    return build(0, inorder.length);
}   

