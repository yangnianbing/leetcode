/*
 * @lc app=leetcode id=321 lang=javascript
 *
 * [321] Create Maximum Number
 *
 * https://leetcode.com/problems/create-maximum-number/description/
 *
 * algorithms
 * Hard (25.77%)
 * Likes:    494
 * Dislikes: 173
 * Total Accepted:    34.1K
 * Total Submissions: 130.8K
 * Testcase Example:  '[3,4,6,5]\n[9,1,2,5,8,3]\n5'
 *
 * Given two arrays of length m and n with digits 0-9 representing two numbers.
 * Create the maximum number of length k <= m + n from digits of the two. The
 * relative order of the digits from the same array must be preserved. Return
 * an array of the k digits.
 * 
 * Note: You should try to optimize your time and space complexity.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * nums1 = [3, 4, 6, 5]
 * nums2 = [9, 1, 2, 5, 8, 3]
 * k = 5
 * Output:
 * [9, 8, 6, 5, 3]
 * 
 * Example 2:
 * 
 * 
 * Input:
 * nums1 = [6, 7]
 * nums2 = [6, 0, 4]
 * k = 5
 * Output:
 * [6, 7, 6, 0, 4]
 * 
 * Example 3:
 * 
 * 
 * Input:
 * nums1 = [3, 9]
 * nums2 = [8, 9]
 * k = 3
 * Output:
 * [9, 8, 9]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let result = new Array(k).fill(0);
    if(len1 + len2 === k){  
        result = mergeTwoArrays(nums1, nums2, k);
    }else{
        for(let i = 0; i <= k; i++){
            if(i <= len1 && (k - i) <= len2){
                let maxNumber1 = maxNumberOfSingleArray(nums1, i);
                let maxNumber2 = maxNumberOfSingleArray(nums2, k - i);
                let maxNumberArray = mergeTwoArrays(maxNumber1, maxNumber2, k);
                if(compareTwoArrays(maxNumberArray, 0, result, 0)){
                    result = maxNumberArray;
                }
            }
        }
    }
    return result;

    function maxNumberOfSingleArray(nums, k){
        let result = new Array(k).fill(0);

        if(k === 0){
            return result;
        }

        let len = nums.length;
        let idx = 0;

        for(let i = 0; i < len; i++){
            while(nums[i] > result[idx-1] && idx > 0 && ((len - i - 1) + (idx + 1)) > k){
                idx--;
            }
            if(idx < k){
                result[idx++] = nums[i];
            }
        }
        return result;
    }

    function mergeTwoArrays(nums1, nums2, k){
        let result = new Array(k).fill(0);
        let idx1 = idx2 = 0;
        let idx = 0;
        while(idx < k){

            if(compareTwoArrays(nums1, idx1, nums2, idx2)){
                result[idx] = nums1[idx1++];
            }else{
                result[idx] = nums2[idx2++];
            }

            idx++;
        }
        return result;
    }

    function compareTwoArrays(nums1, idx1, nums2, idx2){
        let len1 = nums1.length - idx1;
        if(len1 <= 0){
            return false;
        }
        let len2 = nums2.length - idx2;
        if(len2 <= 0){
            return true;
        }
        let len = Math.max(len1, len2);

        for(let i = 0; i < len; i++){
            let digit1 = (idx1 + i) < nums1.length ? nums1[idx1 + i] : 0;
            let digit2 = (idx2 + i) < nums2.length ? nums2[idx2 + i] : 0
            if(digit1 != digit2){
                return digit1 > digit2;
            }
        }
        return true;
    }
};


// @lc code=end

