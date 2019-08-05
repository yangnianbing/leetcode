/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    
    if(!head){return head;}

    let leftStart = left = {};
    let rightStart = right = {};
    let cur = head;

    while(cur){
        let next = cur.next;
        cur.next = null;

        if(cur.val < x){
            left.next = cur;
            left = left.next;
        }else{
            right.next = cur;
            right = right.next;
        }
        cur = next;
    }
    left.next = rightStart.next;

    return leftStart.next;
};



