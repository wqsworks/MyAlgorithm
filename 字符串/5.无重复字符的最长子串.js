// 3. 无重复字符的最长子串
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。


// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function (s) {
  let map = new Map(), max = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      console.log(map.get(s[j]), '------')
      i = Math.max(map.get(s[j]) + 1, i)
      console.log(i)
    }
    max = Math.max(max, j - i + 1)
    map.set(s[j], j)
  }
  console.log(map)
  return max
};


let s = "a"
let res = lengthOfLongestSubstring(s)
console.log(res)