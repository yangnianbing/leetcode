/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.tree = null;

    for(let num of nums){
      this.tree = addToTree(this.tree, num);
    }
};
function addToTree(node, val){
  if(!node){
    return {val:val, count:1}
  }
  node.count++;
  if(val < node.val){
    
    node.left = arguments.callee(node.left, val)
  }else{
    node.right = arguments.callee(node.right, val);
  }
  return node;
}
/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.tree = addToTree(this.tree, val);
    return this.findKthLargest();
};

KthLargest.prototype.findKthLargest = function(){
  let count = this.k;
  let node = this.tree;
  while(count > 0){
    let right = 1 + (node.right ? node.right.count : 0);
    if(count === right){
      break;
    }
    if(count > right){
      count -= right;
      node = node.left;
    }else{
      node = node.right;
    }
  }

  return node.val;
}



/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

