/*
 * @lc app=leetcode id=352 lang=javascript
 *
 * [352] Data Stream as Disjoint Intervals
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var SummaryRanges = function() {
  this.nums = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(val) {
  let i = 0  
  for(let len = this.nums.length; i < len; i++){
    if(val < this.nums[i]){
      break
    }
  }

  this.nums = [...this.nums.slice(0, i), val, ...this.nums.slice(i)]
  console.log(this.nums)
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
    let result = []
    if(this.nums.length === 0){
      return result
    }
    result.push([this.nums[0], this.nums[0]])

    for(let i = 1; i < this.nums.length ; i++){
      if(this.nums[i] === this.nums[i - 1] + 1){
        result[result.length - 1] = [result[result.length - 1][0], result[result.length - 1][1] + 1]
      }else if(this.nums[i] > this.nums[i - 1] + 1){
        result.push([this.nums[i], this.nums[i]])
      }
    }
    return result
};
/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

