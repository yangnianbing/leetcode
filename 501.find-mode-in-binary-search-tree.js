/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let currVal = null;
  let currCount = 0;
  let maxCount = 0;
  let modeCount = 0;
  let modes = null;

  const handleValue = val => {
    if(val !== currVal){
      currVal = val;
      currCount = 0;
    }

    currCount++;

    if(currCount > maxCount){
      maxCount = currCount;
      modeCount = 1;
    }else if(currCount == maxCount){
      //第二遍遍历的时候，modes才会初始化，这个时候才会往modes内填值
      if(modes != null){
        modes[modeCount] = currVal;
      }
      modeCount++;
    }
  }

  const inorder = node => {
    if(node === null){
      return;
    }
    inorder(node.left);
    handleValue(node.val);
    inorder(node.right);
  }


  inorder(root);
  modes = new Array(modeCount);
  modeCount = 0;
  currCount = 0;
  inorder(root);
  return modes;

};


