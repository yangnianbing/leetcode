/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 *
 * https://leetcode.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (50.94%)
 * Likes:    827
 * Dislikes: 113
 * Total Accepted:    102.5K
 * Total Submissions: 200.9K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The most significant digit comes first and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * 
 * Follow up:
 * What if you cannot modify the input lists? In other words, reversing the
 * lists is not allowed.
 * 
 * 
 * 
 * Example:
 * 
 * Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 8 -> 0 -> 7
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let tail1 = getTail(l1);
    let tail2 = getTail(l2);
    let dummy = {next:{val:0}};

    let value = 0;
    while(tail1 || tail2){
        value = dummy.next.val + ((tail1 ? tail1.val : 0) + (tail2 ? tail2.val : 0));
        dummy.next.val = value % 10;
        let newNode = {val: parseInt(value / 10), next: dummy.next};
        dummy.next = newNode;
        tail1 = tail1 ? tail1.prev: null
        tail2 = tail2 ? tail2.prev: null
    }
    return (dummy.next.val === 0 && dummy.next.next) ? dummy.next.next : dummy.next;

    function getTail(head){
        let tail = head;

        while(tail.next){
            tail.next.prev = tail;
            tail = tail.next;
        }
        return tail;
    }
};



