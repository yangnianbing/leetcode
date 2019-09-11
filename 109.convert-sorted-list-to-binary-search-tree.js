/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (42.08%)
 * Likes:    1209
 * Dislikes: 72
 * Total Accepted:    191.2K
 * Total Submissions: 451.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * Example:
 * 
 * 
 * Given the sorted linked list: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {

    return toBST(head, null);

    function toBST(head, tail){
        let fast = slow = head;
        if(head === tail){
            return null;
        }

        while(fast != tail && fast.next != tail){
            fast = fast.next.next;
            slow = slow.next;
        }

        let node = {val: slow.val};
        node.left = toBST(head, slow);
        node.right = toBST(slow.next, tail);
        return node;
    }
};

