/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (35.80%)
 * Likes:    1428
 * Dislikes: 100
 * Total Accepted:    212.7K
 * Total Submissions: 592K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Reverse a linked list from position m to n. Do it in one-pass.
 * 
 * Note: 1 ≤ m ≤ n ≤ length of list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL, m = 2, n = 4
 * Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
   if(!head){
       return null;
   }

   let dummy = {next:head};
   let pre = dummy;

   for(let i = 0; i <m -1;i++){
       pre = pre.next;
   }

   let start = pre.next;
   let then = start.next;

   for(let i = 0; i < n - m; i++){
       start.next = then.next;
       then.next = pre.next;
       pre.next = then;
        then = start.next;
   }

   return dummy.next;
};

