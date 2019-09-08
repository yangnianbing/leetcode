/*
 * @lc app=leetcode id=1130 lang=javascript
 *
 * [1130] Minimum Cost Tree From Leaf Values
 *
 * https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/description/
 *
 * algorithms
 * Medium (58.37%)
 * Likes:    175
 * Dislikes: 15
 * Total Accepted:    5.3K
 * Total Submissions: 8.9K
 * Testcase Example:  '[6,2,4]'
 *
 * Given an array arr of positive integers, consider all binary trees such
 * that:
 * 
 * 
 * Each node has either 0 or 2 children;
 * The values of arr correspond to the values of each leaf in an in-order
 * traversal of the tree.  (Recall that a node is a leaf if and only if it has
 * 0 children.)
 * The value of each non-leaf node is equal to the product of the largest leaf
 * value in its left and right subtree respectively.
 * 
 * 
 * Among all possible binary trees considered, return the smallest possible sum
 * of the values of each non-leaf node.  It is guaranteed this sum fits into a
 * 32-bit integer.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: arr = [6,2,4]
 * Output: 32
 * Explanation:
 * There are two possible trees.  The first has non-leaf node sum 36, and the
 * second has non-leaf node sum 32.
 * 
 * ⁠   24            24
 * ⁠  /  \          /  \
 * ⁠ 12   4        6    8
 * ⁠/  \               / \
 * 6    2             2   4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= arr.length <= 40
 * 1 <= arr[i] <= 15
 * It is guaranteed that the answer fits into a 32-bit signed integer (ie. it
 * is less than 2^31).
 * 
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues1 = function(arr) {
    let len = arr.length;
    let dp = Array.from({length:len}, () => new Array(len).fill(0));
    let max =  Array.from({length:len}, () => new Array(len).fill(0));

    for(let i = 0; i < arr.length; i++){
        let maxValue = 0;
        for(let j = i; j < arr.length; j++){
            maxValue = Math.max(maxValue, arr[j]);
            max[i][j] = maxValue;
        }
    }

    for(let l = 1; l < len; l++){
        for(let left = 0; left + l < len; left++){
            let right = left + l;
            dp[left][right] = Number.MAX_SAFE_INTEGER;
            if(l === 1){
                dp[left][right] = arr[left]*arr[right];
            }else{
                for(let k = left; k < right; k++){
                    dp[left][right] = Math.min(dp[left][right], dp[left][k] + dp[k+1][right] + max[left][k] * max[k+1][right]);
                }
            }
        }
    }

    return dp[0][len-1];

};
var mctFromLeafValues = function(arr) {
    let res = 0, n = arr.length;

    let stack = [Number.MAX_SAFE_INTEGER];

    for(let a of arr){
        while(stack[stack.length - 1] <= a){
            let m = stack.pop();
            res += m * Math.min(stack[stack.length - 1], a);
        }
        stack.push(a);
    }

    while(stack.length > 2){
        res += stack.pop() * stack[stack.length - 1];
    }

    return res;

}

mctFromLeafValues([6,5,4,3,2,1])

// 6 5 4 3 2 1

