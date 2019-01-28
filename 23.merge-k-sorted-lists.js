/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (32.06%)
 * Total Accepted:    317.7K
 * Total Submissions: 991K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 * Example:
 * 
 * 
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var flg = {}; 
    var i = 0;

    while(i < lists.length){
        if(!lists[i]){
            lists.splice(i, 1);
        }else{
            i++;
        }
    }
    if(lists.length === 0){
        return null
    }
    flg.next = min(lists);
    var header = flg.next;
    while(lists.length !== 0){
        header.next = min(lists);
        header = header.next
    }
    return flg.next;

    
    function min(array){
        var minNode={val: Number.MAX_VALUE};
        var minNodeIndex = -1;
        array.forEach((node, index) => {
            if(node.val < minNode.val){
                minNode = node;
                minNodeIndex = index;
            }
        })
        if(!minNode.next){
            array.splice(minNodeIndex, 1);
        }else{
            array[minNodeIndex] = minNode.next;
        }
        return minNode;
    }
};
mergeKLists([])
// mergeKLists([{
//     val: 1,
//     next: {
//         val: 4,
//         next: {
//             val: 5,
//             next:null
//         }
//     }
// },{
//     val:1,
//     next: {
//         val: 3,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// },{
//     val: 2,
//     next: {
//         val: 6,
//         next: null
//     }
// }])