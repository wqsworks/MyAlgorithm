// // 题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// // 有效字符串需满足：

// // 左括号必须用相同类型的右括号闭合。
// // 左括号必须以正确的顺序闭合。
// // 注意空字符串可被认为是有效字符串。

// // 示例 1:

// // 输入: "()"
// // 输出: true


function isValid (s) {
  let map1 = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  if (!s) {
    return true
  }
  let len = s.length
  const stack = []
  for (let i = 0; i < len; i++) {
    // console.log(s[i], i)
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i])
    } else {
      //  这里的顺序不能写反，写反了之后stack.pop()已经把元素pop出来了 stack.length就等于了
      if (!stack.length || s[i] != map1[stack.pop()]) {
        console.log(s[i], map1[cur])
        return false
      }
    }
  }
  // console.log(stack)
  return !stack.length;
}
console.log(isValid('({}){}'))
// console.log(isValid('({}){}{{}}'))

