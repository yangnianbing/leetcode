/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 */
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    let map = {};

    for(let r = 0; r < R; r++){
      for(let c = 0; c < C; c++){
        let distance = Math.abs(r - r0) + Math.abs(c - c0);
        if(!map[distance]){
          map[distance] = [[r, c]];
        }else{
          map[distance].push([r, c]);
        }
      }
    }

    return Object.entries(map).sort((a, b) => Number(a[0]) - Number(b[0])  > 0 ? 1 : -1).map(([distance, cells]) => cells).reduce((a, b) => a.concat(b))

};

