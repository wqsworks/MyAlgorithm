// 516. 最长回文子序列
// 给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。



// 示例 1:
// 输入:

// "bbbab"
// 输出:

// 4
// 一个可能的最长回文子序列为 "bbbb"。

// 示例 2:
// 输入:

// "cbbd"
// 输出:

// 2
// 一个可能的最长回文子序列为 "bb"。





/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length
  const dp = Array.from(new Array(len), () => new Array(len).fill(0))
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j++; j < len) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
        // maxLen = 
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
      }
    }
  }
  return dp[0][len - 1]
};