// 151. 翻转字符串里的单词
// 给定一个字符串，逐个翻转字符串中的每个单词。

// 说明：

// 无空格字符构成一个 单词 。
// 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。
// 如果两个单词间有多余的空格，将反转后单词间的空格减少到只含一个。


// 示例 1：

// 输入："the sky is blue"
// 输出："blue is sky the"
// 示例 2：

// 输入："  hello world!  "
// 输出："world! hello"
// 解释：输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括。

var reverseWords = function (s) {
  return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
};

var reverseWords = function (s) {
  let left = 0
  let right = s.length - 1
  let queue = []
  let word = ''
  while (s.charAt(left) === ' ') left++
  while (s.charAt(right) === ' ') right--
  while (left <= right) {
    let char = s.charAt(left)
    if (char === ' ' && word) {
      queue.unshift(word)
      word = ''
    } else if (char !== ' ') {
      word += char
    }
    left++
  }
  queue.unshift(word)
  return queue.join(' ')
};
