// 简单题
// const str = 'yessey'

// function isPalindrome (str) {
//   let len = str.length
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - i - 1]) {
//       return false
//     }
//   }
//   return true
// }

// let result = isPalindrome(str)
// console.log(result)


// 高频题

// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1:
// 输入: "aba"
// 输出: True

// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a - z 的小写字母。字符串的最大长度是50000。

let s = 'baaaaaaasb'
const validPalindrome = function (s) {
  // 缓存字符串的长度
  const len = s.length

  // i、j分别为左右指针
  let i = 0, j = len - 1

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++
    j--
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true
  }
  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome (st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }

  // 默认返回 false
  return false
};

const valiaPalindrome1 = function (s) {
  let len = s.length
  let l = 0, r = len - 1
  while (l < r && s[l] == s[r]) {
    l++
    r--
  }
  if (isPalindrome(l + 1, r)) {
    return true
  }

  if (isPalindrome(l, r - 1)) {
    return true
  }
  function isPalindrome (ll, rr) {
    while (ll < rr) {
      if (s[ll] != s[rr]) {
        return false
      }
      ll++
      rr--
    }
    return true
  }
  return false
}

let result = validPalindrome(s)
let result1 = valiaPalindrome1(s)
console.log(result, result1)