/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (34.30%)
 * Total Accepted:    287.2K
 * Total Submissions: 836.5K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length === 0){
        return [];
    }
    let result = [];
    intervals.sort((a, b) => a[0] > b[0] ? 1 : -1);
    result.push(intervals[0]);
    let lastOne;
    for(let interval of intervals){
        lastOne = result[result.length - 1];
        if(interval[0] <= lastOne[1]){
            lastOne[1] = Math.max(interval[1], lastOne[1]);
        }else{
            result.push(interval);
        }
    }
    return result;
};


