// 14. 最长公共前缀
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。

// 链接：https://leetcode-cn.com/problems/longest-common-prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // let str = strs[0]
  // if (!str) return ''
  // let res = ''
  // for (let i = 0; i < str.length; i++) {
  //   let flag = strs.every(item => item[i] == str[i])
  //   if (flag) {
  //     res += str[i]
  //   } else {
  //     return res
  //   }
  // }
  // return res
};


var longestCommonPrefix = function (strs) {
  let str = strs[0]
  if (str == '') return ''
  let res = ''
  for (let i = 0; i < str.length; i++) {
    let flag = strs.every(item => item[i] == str[i])
    if (flag) {
      res += str[i]
    } else {
      return res
    }
  }
  return res
};

let strs = ["flower", "flow", "flight"]
let res = longestCommonPrefix(strs)
console.log(res)
