/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (42.23%)
 * Total Accepted:    264.8K
 * Total Submissions: 626.8K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * 
 * Example:
 * 
 * 
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 * 
 * Note:
 * 
 * 
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head){return head}
    var headFlg = {}
    headFlg.next = head;

    var index = 1;
    var parent = headFlg;
    var current = head;
    while(current.next){
        if(index % 2 == 1){
            parent.next = current.next;
            current.next = parent.next.next;
            parent.next.next = current;
        }else{
            parent = current
            current = current.next;
        }
        index++;
    }
    return headFlg.next;
};