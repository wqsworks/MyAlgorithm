// 5. 最长回文子串
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

// https://leetcode-cn.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   if (s.length <= 1) {
//     return s
//   }
//   let lps = ''
//   const len = s.length
//   let dp = Array.from(new Array(len), () => new Array(len).fill(false))
//   for (let i = 0; i < len; i++) {
//     dp[i][i] = 1
//     lps = s[i]
//   }
//   for (let i = 0; i < len; i++) {
//     if (s[i] === s[i + 1]) {
//       dp[i][i + 1] = true
//     }
//     if (dp[i][i + 1]) {
//       lps = s.substring(i, i + 2)
//     }
//   }
//   for (let i = len - 1; i >= 0; i--) {
//     for (let j = i + 2; j < len; j++) {
//       dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
//       if (dp[i][j]) {
//         lps = lps.length < (j - i + 1) ? s.substring(i, j + 1) : lps;
//       }
//     }
//   }

//   return lps
// };

let s = 'babab'
let result = longestPalindrome(s)
console.log(result)



