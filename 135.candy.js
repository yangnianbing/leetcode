/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 *
 * https://leetcode.com/problems/candy/description/
 *
 * algorithms
 * Hard (29.06%)
 * Likes:    610
 * Dislikes: 131
 * Total Accepted:    111K
 * Total Submissions: 378.2K
 * Testcase Example:  '[1,0,2]'
 *
 * There are N children standing in a line. Each child is assigned a rating
 * value.
 * 
 * You are giving candies to these children subjected to the following
 * requirements:
 * 
 * 
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 * 
 * 
 * What is the minimum candies you must give?
 * 
 * Example 1:
 * 
 * 
 * Input: [1,0,2]
 * Output: 5
 * Explanation: You can allocate to the first, second and third child with 2,
 * 1, 2 candies respectively.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [1,2,2]
 * Output: 4
 * Explanation: You can allocate to the first, second and third child with 1,
 * 2, 1 candies respectively.
 * ⁠            The third child gets 1 candy because it satisfies the above two
 * conditions.
 * 
 * 
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies = new Array(ratings.length).fill(1);

    for(let i = 1; i < ratings.length; i++){
        if(ratings[i] > ratings[i - 1]){
            candies[i] = candies[i - 1] + 1;
        }
    }

    for(let i = ratings.length - 1; i > 0; i--){
        if(ratings[i - 1] > ratings[i]){
            candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1]);
        }
    }

    return candies.reduce((a, b) => a + b, 0);
};

