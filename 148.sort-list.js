/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (36.79%)
 * Likes:    1720
 * Dislikes: 88
 * Total Accepted:    205.8K
 * Total Submissions: 552.8K
 * Testcase Example:  '[4,2,1,3]'
 *
 * Sort a linked list in O(n log n) time using constant space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 4->2->1->3
 * Output: 1->2->3->4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -1->5->3->4->0
 * Output: -1->0->3->4->5
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
var sortList = function(head) {

    if(!head || !head.next){
        return head;
    }

    let slow = head;
    let fast = head.next;
    
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let list2 = slow.next;
    slow.next = null;

    return merge(sortList(head), sortList(list2));

    function merge(l1, l2){
        let dummy = pre = {};

        while(l1 != null && l2 != null){
            if(l1.val < l2.val){
                pre.next = l1;
                l1 = l1.next;
            }else{
                pre.next = l2;
                l2 = l2.next;
            }
            pre = pre.next;
        }

        if(l1 != null){
            pre.next = l1;
        }
        if(l2 != null){
            pre.next = l2;
        }

        return dummy.next;
    }
};

