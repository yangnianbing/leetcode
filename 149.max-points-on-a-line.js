/*
 * @lc app=leetcode id=149 lang=javascript
 *
 * [149] Max Points on a Line
 *
 * https://leetcode.com/problems/max-points-on-a-line/description/
 *
 * algorithms
 * Hard (16.02%)
 * Likes:    574
 * Dislikes: 1504
 * Total Accepted:    130.5K
 * Total Submissions: 808.9K
 * Testcase Example:  '[[1,1],[2,2],[3,3]]'
 *
 * Given n points on a 2D plane, find the maximum number of points that lie on
 * the same straight line.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,1],[2,2],[3,3]]
 * Output: 3
 * Explanation:
 * ^
 * |
 * |        o
 * |     o
 * |  o  
 * +------------->
 * 0  1  2  3  4
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
 * Output: 4
 * Explanation:
 * ^
 * |
 * |  o
 * |     o        o
 * |        o
 * |  o        o
 * +------------------->
 * 0  1  2  3  4  5  6
 * 
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if(!points){return 0;}
    if(points.length <= 2){
        return points.length;
    }

    let result = 0;
    for(let i = 0; i < points.length - 1; i++){
        let map = {};
        let overlap = 0;
        let lineMax = 0;
        for(let j = i + 1; j < points.length; j++){
            let x = points[i][0] - points[j][0];
            let y = points[i][1] - points[j][1];

            if(x === 0 && y === 0){
                overlap++;
                continue;
            }

            let gcd = countGcd(x, y);
            x /= gcd;
            y /= gcd;

            let slop = x + '_' + y;
            let count = map[slop] ? map[slop] : 0;
            count++;
            map[slop] = count;
            lineMax = Math.max(lineMax, count);
        }
        result = Math.max(result, lineMax + overlap + 1);
    }

    return result;

    function countGcd(a, b){
        if(b === 0){
            return a;
        }else{
            return countGcd(b, a % b);
        }
    }
};
// @lc code=end

