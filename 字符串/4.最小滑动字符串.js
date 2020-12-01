// 滑动窗口

// 76. 最小覆盖子串
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

// 示例 1：
// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"

// 示例 2：
// 输入：s = "a", t = "a"
// 输出："a"


// 题解：
// https://leetcode-cn.com/problems/minimum-window-substring/solution/yi-bu-bu-xing-cheng-hua-dong-chuang-kou-si-lu-shen/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let sLen = s.length
  let minLen = sLen + 1
  let start = sLen
  let map = {}
  let missingType = 0
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]++
    } else {
      missingType++
      map[t[i]] = 1
    }
  }
  console.log(map)
  let l = 0, r = 0
  while (r < sLen) {
    if (map[s[r]] !== undefined) {
      map[s[r]]--
      if (map[s[r]] == 0) {
        missingType--
      }
    }
    // console.log(l, r, missingType)
    while (missingType == 0) {
      // console.log(missingType)
      // console.log(map[s[l]])
      // console.log(r - l + 1, minLen)
      if (r - l + 1 < minLen) {    // 窗口宽度如果比minLen小，就更新minLen
        minLen = r - l + 1;
        start = l;                 // 更新最小窗口的起点
      }
      if (map[s[l]] !== undefined) {
        map[s[l]]++
      }
      if (map[s[l]] > 0) {
        missingType++
      }
      l++
    }
    r++
  }
  console.log(start, minLen)
  if (start == sLen) return "";
  return s.substring(start, start + minLen)
};


let s = "a", t = "aa"

let res = minWindow(s, t)
console.log(res, '------')