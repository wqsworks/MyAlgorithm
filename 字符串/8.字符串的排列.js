// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

// 示例1:

// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s2Len = s2.length
  let needs = {}
  let window = {}
  for (let i = 0; i < s1.length; i++) {
    if (!needs[s1[i]]) {
      needs[s1[i]] = 1
    } else {
      needs[s1[i]]++
    }
  }
  let left = 0, right = 0, valid = 0
  while (right < s2Len) {
    let temp = s2[right]
    right++
    if (needs[temp]) {
      if (!window[temp]) {
        window[temp] = 1
      } else {
        window[temp]++
      }
      if (window[temp] == needs[temp]) {
        valid++
      }
    }
    while (right - left >= s1.length) {
      if (valid == Object.keys(needs).length) {
        return true
      }
      let deletChar = s2[left]
      if (needs[deletChar]) {
        if (window[deletChar] == needs[deletChar]) {
          valid--
        }
        window[deletChar]--
      }
      left++
    }
  }
  return false
};

let s1 = "hello"
let s2 = "ooolleoooleh"
let res = checkInclusion(s1, s2)
console.log(res)
