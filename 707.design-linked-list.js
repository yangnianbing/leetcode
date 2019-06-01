/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size){
      return -1;
    }
    let cur = this.head;

    for(let i = 0; i < index; i++){
      cur = cur.next;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newHead = {val: val, next: this.head};
    this.head = newHead;
    this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
      this.head = {val: val, next: null};
    }else{
      let cur = this.head;
      while(cur.next != null){
        cur = cur.next;
      }
      cur.next = {val: val, next: null};
    }
    this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this.size){
      return;
    }
    
    if(index <= 0){
      this.addAtHead(val);
      return;
    }

    if(index === this.size){
      this.addAtTail(val);
      return;
    }
    this.size++;
    let cur = this.head;
    for(let i = 0; i < index-1; i++){
      cur = cur.next;
    }

    let next = cur.next;

    cur.next = {val: val, next: next}
    
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size){
      return;
    }
    this.size--
    if(index === 0){
      this.head = this.head.next;
      return;
    }
    let cur = this.head;

    for(let i = 0; i < index - 1; i++){
      cur = cur.next;
    }
    cur.next = cur.next.next;

    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var obj = new MyLinkedList();
obj.addAtIndex(-1, 0)
obj.get(0)
obj.deleteAtIndex(-1);
