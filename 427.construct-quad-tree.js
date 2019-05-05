/*
 * @lc app=leetcode id=427 lang=javascript
 *
 * [427] Construct Quad Tree
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
  if(!grid){
    return null;
  }
  if(isLeaf(grid)){
    return new Node(grid[0][0] === 1, true, null, null, null, null);
  }
  
  let n = grid.length;
  let parts = splitArray(grid);
  return new Node('*', false, construct(parts[0]), construct(parts[1]), construct(parts[2]), construct(parts[3]))
};

function splitArray(grid){
  let topLeft = [];
  let topRight = [];
  let bottomLeft = [];
  let bottomRight = [];

  let len = grid.length;
  let halfLen = len / 2;
  for(let i = 0; i < halfLen; i++){
    topLeft.push(grid[i].slice(0, halfLen));
    topRight.push(grid[i].slice(halfLen));
  }
  for(let i = halfLen; i < len; i++){
    bottomLeft.push(grid[i].slice(0, halfLen));
    bottomRight.push(grid[i].slice(halfLen));
  }
  return [topLeft, topRight, bottomLeft, bottomRight]
}

function isLeaf(grid){
  let value = grid[0][0];
  for(let i of grid){
    for(let j of i){
      if(j !== value){
        return false;
      }
    }
  }
  return true;
}


