// 300. 最长上升子序列
// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4 
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
// 说明:

// 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
// 你算法的时间复杂度应该为 O(n2) 。
// 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
// https://leetcode-cn.com/problems/longest-increasing-subsequence/


/**
 * @param {number[]} nums
 * @return {number}
 */


//   fo
var lengthOfLIS = function (nums) {
  const len = nums.length
  if (!len) {
    return 0
  }
  const dp = (new Array(len)).fill(1)
  let maxLen = 1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i]
    }
  }
  return maxLen
};

// 最长上升子序列中 dp[j]可以理解成： 以nums[j]作为 ”最长上升子序列最大值的“ 子序列长度