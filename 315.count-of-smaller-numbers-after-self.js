/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 *
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/
 *
 * algorithms
 * Hard (38.94%)
 * Likes:    1572
 * Dislikes: 63
 * Total Accepted:    98.1K
 * Total Submissions: 245.2K
 * Testcase Example:  '[5,2,6,1]'
 *
 * You are given an integer array nums and you have to return a new counts
 * array. The counts array has the property where counts[i] is the number of
 * smaller elements to the right of nums[i].
 * 
 * Example:
 * 
 * 
 * Input: [5,2,6,1]
 * Output: [2,1,1,0] 
 * Explanation:
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//二叉搜索树
var countSmaller1 = function(nums) {
    function TreeNode(val){
        this.val = val;
        this.count = 0;
        this.left = null;
        this.right = null;
    }


    function insertNode(root, val, result, index){
        if(root === null){
            root = new TreeNode(val);
        }else if(val <= root.val){
            root.count += 1;
            root.left = insertNode(root.left, val, result, index);
        }else if(val > root.val){
            result[index] += root.count + 1;
            root.right = insertNode(root.right, val, result, index);
        }
        return root;
    }

    let result = new Array(nums.length).fill(0);
    let root = null;
    for(let i = nums.length - 1; i >= 0; i--){
        root = insertNode(root, nums[i],  result, i);
    }
   
    return result;
};

//归并排序
var countSmaller = function(nums){
    function mergeSort(arr, result){
        if(arr.length <= 1){
            return arr;
        }
    
        let mid = parseInt(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid), result);
        let right = mergeSort(arr.slice(mid), result);
        return merge(left, right, result);
    }

    function merge(left, right, result){
        let tmp = [];
        let i = j = 0;
        while(i < left.length || j < right.length){
            if(j === right.length ||
                (i < left.length && left[i][1] <= right[j][1])){
                    tmp.push(left[i]);
                    result[left[i][0]] += j;
                    i++
                }else{
                    tmp.push(right[j]);
                    j++;
                }
        }

        return tmp;
    }

    let result = new Array(nums.length).fill(0);
    mergeSort(nums.map((val, index) => [index, val]), result)
    return result;
}

// @lc code=end

