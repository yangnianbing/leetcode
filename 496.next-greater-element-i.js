/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let staticInfo = {};
  let stack = [];

  for(let i of nums2){
    while(stack.length !== 0 && stack[stack.length - 1] < i){
      staticInfo[stack.pop()] = i;
    }
    stack.push(i);
  }


  for(let i = 0; i < nums1.length; i++){
    nums1[i] = staticInfo[nums1[i]] ? staticInfo[nums1[i]] : -1;
  }

  return nums1;

};

