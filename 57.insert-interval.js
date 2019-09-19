/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.48%)
 * Total Accepted:    159.2K
 * Total Submissions: 522.1K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
 * 
 * 
 * 
 * [1,2] [3,5] [4,8] [6,7] [8, 10] [12 ,16]
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a.start - b.start);

    let result = [intervals[0]];
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i].start > result[result.length - 1].end){
            result.push(intervals[i]);
        }else{
            result[result.length - 1].end = Math.max(result[result.length - 1].end, intervals[i].end);
        }
    }

    return result; 
};
insert(
    [{start:1, end: 3}, {start: 6, end: 9}], {start: 2, end: 5}
)
