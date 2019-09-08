/*
 * @lc app=leetcode id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 *
 * https://leetcode.com/problems/corporate-flight-bookings/description/
 *
 * algorithms
 * Medium (47.97%)
 * Likes:    203
 * Dislikes: 28
 * Total Accepted:    8K
 * Total Submissions: 16.4K
 * Testcase Example:  '[[1,2,10],[2,3,20],[2,5,25]]\n5'
 *
 * There are n flights, and they are labeled from 1 to n.
 * 
 * We have a list of flight bookings.  The i-th booking bookings[i] = [i, j, k]
 * means that we booked k seats from flights labeled i to j inclusive.
 * 
 * Return an array answer of length n, representing the number of seats booked
 * on each flight in order of their label.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5
 * Output: [10,55,45,25,25]
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= bookings.length <= 20000
 * 1 <= bookings[i][0] <= bookings[i][1] <= n <= 20000
 * 1 <= bookings[i][2] <= 10000
 * 
 */
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    let result = new Array(n).fill(0);

    bookings.forEach(bookingInfo => {
        result[bookingInfo[0] - 1] += bookingInfo[2];
        if(bookingInfo[1] < n){
            result[bookingInfo[1]] -= bookingInfo[2];
        }
    })

    for(let i = 1; i < n; i++){
        result[i] += result[i - 1];
    }

    return result;
};


