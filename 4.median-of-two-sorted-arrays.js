/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.17%)
 * Total Accepted:    378.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
    let [shortLen, shortArray, longLen, longArray] = [nums1.length, nums1, nums2.length, nums2];


    if(shortLen > longLen){
        [shortLen, shortArray, longLen, longArray] = [longLen, longArray, shortLen, shortArray];
    }

    if(longArray === 0){
        return 0;
    }

    let [imin, imax, halfLen] = [0, shortLen, parseInt((shortLen + longLen + 1) / 2)]
    
    while(imin <= imax){
        let i = parseInt((imin + imax) / 2);
        let j = halfLen - i;

        if(i < shortLen && longArray[j - 1] > shortArray[i]){
            imin = i + 1;
        }else if(i > 0 && shortArray[i - 1] > longArray[j]){
            imax = i - 1;
        }else{
            let maxLeft;
            if(i === 0){
                maxLeft = longArray[j - 1];
            }else if(j === 0){
                maxLeft = shortArray[i - 1];
            }else{
                maxLeft = Math.max(shortArray[i - 1], longArray[j - 1]);
            }

            if((shortLen + longLen) % 2 === 1){
                return maxLeft;
            }

            let minRight
            if(i === shortLen){
                minRight = longArray[j];
            }else if(j === longLen){
                minRight =  shortArray[i];
            }else{
                minRight = Math.min(shortArray[i], longArray[j]);
            }
            return (maxLeft + minRight) / 2;
        }
    }

};


