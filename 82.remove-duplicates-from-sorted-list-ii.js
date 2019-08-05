/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    if(!head){
        return head;
    }
    let dummy = {val:null, next:head};

    
    let prev = dummy,
        cur = head;
        

    while(cur && cur.next){
        let next = cur.next;
        if(cur.val === next.val){
            while(next && next.val === cur.val){
                next = next.next;
            }
            prev.next = next;
            cur = prev.next;
        }else{
            prev = cur;
            cur = cur.next;
        }
    }


    return dummy.next;
};



