/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

    let map = {};
    let [UP, DOWN, LEFT, RIGHT] = ['U', 'D', 'L', 'R'];
    

    moves.split('').forEach(move => {
      map[move] = map[move] ? map[move] + 1 : 1;
    })

    return (map[UP] ? map[UP] === map[DOWN] : !map[DOWN] ) && (map[LEFT] ? map[LEFT] === map[RIGHT] : !map[RIGHT]);
};

