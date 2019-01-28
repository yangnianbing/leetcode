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
    if(!intervals || intervals.length === 0){
        return [newInterval];
    }
    var staticInfo = {};
    var min = Math.min(intervals[0].start, newInterval.start)
    var max = Math.max(intervals[intervals.length - 1].end, newInterval.end)
    intervals.push(newInterval);
    intervals.forEach(inter => {
        for(var i = 2 * inter.start; i <= 2 * inter.end; i++){
            staticInfo[i] = true
        }
    })

    var newBlock = true;
    var result = [];
    var current;
    for(var i = min; i <= max; i++){
        if(staticInfo[2 * i] && newBlock){
            current = {start: i}
            newBlock = false;
            if(!staticInfo[2 * i + 1]){
                current.end = i;
                result.push(current);
                newBlock = true;
            }
            
        }else if(staticInfo[2 * i] && !staticInfo[2 * i + 1]){
            current.end = i;
            result.push(current);
            newBlock = true;
        }
    }
    return result;
};

insert([{start:1, end: 5}], {start: 0, end: 0})