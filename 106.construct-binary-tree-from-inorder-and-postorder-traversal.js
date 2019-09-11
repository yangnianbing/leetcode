/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (40.61%)
 * Likes:    1011
 * Dislikes: 21
 * Total Accepted:    168.6K
 * Total Submissions: 411.8K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
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
 * 
 */
/**
 * Definition for a binary tree noe.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree1 = function(inorder, postorder) {
    let map = {};

    inorder.forEach((value, index) => {
        map[value] = index;
    })

    function build(postorder){
        if(postorder.length === 0){
            return null;
        }

        let node = {val: postorder[postorder.length - 1]};

        let postorderLeft = [];
        let postorderRight = [];

        let index = map[postorder[postorder.length - 1]];

        for(let i = 0; i < postorder.length - 1; i++){
            let curIndex = map[postorder[i]];
            if(curIndex < index){
                postorderLeft.push(postorder[i]);
            }else{
                postorderRight.push(postorder[i]);
            }
        }
        node.left = build(postorderLeft);
        node.right = build(postorderRight);
        return node;
    }

    return build(postorder);
};


var buildTree = function(inorder, postorder){
    let map = {};

    inorder.forEach((value, index) => {
        map[value] = index;
    })

    let preIndex = postorder.length - 1;
    function build(left, right){
        if(left === right){
            return null;
        }

        let nodeValue = postorder[preIndex--];
        let node = {val: nodeValue};
        let index = map[nodeValue];

        node.right = build(index+1, right);
        node.left = build(left, index);
        return node;
    }

    return build(0, postorder.length)

}



