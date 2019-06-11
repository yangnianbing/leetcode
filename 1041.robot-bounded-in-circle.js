/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */
/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let x = y = 0;
    let steps = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dir = 0;
    for(let i = 0; i < instructions.length; i++){
      if(instructions.charAt(i) === 'R'){
        dir = (dir + 1) % 4;
      }else if(instructions.charAt(i) === 'L'){
        dir = (dir + 3) % 4;
      }else{
        x += steps[dir][0];
        y += steps[dir][1]
      }
    }

    return x === 0 && y === 0 || dir !== 0;
};

