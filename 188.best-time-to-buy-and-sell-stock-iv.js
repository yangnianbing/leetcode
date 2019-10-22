/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
 *
 * algorithms
 * Hard (26.76%)
 * Likes:    956
 * Dislikes: 60
 * Total Accepted:    101.7K
 * Total Submissions: 376.3K
 * Testcase Example:  '2\n[2,4,1]'
 *
 * Say you have an array for which the i-th element is the price of a given
 * stock on day i.
 * 
 * Design an algorithm to find the maximum profit. You may complete at most k
 * transactions.
 * 
 * Note:
 * You may not engage in multiple transactions at the same time (ie, you must
 * sell the stock before you buy again).
 * 
 * Example 1:
 * 
 * 
 * Input: [2,4,1], k = 2
 * Output: 2
 * Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit
 * = 4-2 = 2.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,6,5,0,3], k = 2
 * Output: 7
 * Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit
 * = 6-2 = 4.
 * Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 =
 * 3.
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if(k > prices.length / 2){
        let result = 0;
        for(let i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]){
                result += prices[i] - prices[i - 1];
            }
        }
        return result;
    }
    let cache = Array.from({length: k + 1}, () => new Array(prices.length).fill(0));

    for(let i = 1; i <= k; i++){
        let max = -prices[0];

        for(let j = 1; j < prices.length; j++){
            cache[i][j] = Math.max(cache[i][j - 1], prices[j] + max);
            max = Math.max(cache[i-1][j - 1] - prices[j], max);
        }

    }

    return cache[k][prices.length - 1];
};
// @lc code=end

