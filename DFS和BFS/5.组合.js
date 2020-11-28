// 77. 组合
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:

// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
// https://leetcode-cn.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// var combine = function (n, k) {
  // let res = []
  // let subset = []
  // function bfs (count) {
  //   if (subset.length == k) {
  //     res.push(subset.slice())
  //     return
  //   }
  //   for (let i = count; i < n + 1; i++) {
  //     subset.push(i)
  //     bfs(i + 1)
  //     subset.pop()
  //   }
  // }
  // bfs(1)
  // return res
// };



var combine = function (n, k) {
  let res = []
  let cur = []
  function def (count) {
    if (cur.length == k) {
      res.push(cur.slice())
      return
    }
    for (let i = count; i < n+1; i++) {
      cur.push(i)
      def(i+ 1)
      cur.pop()
    }
  }
  def(1)
  return res
};

let result = combine(4, 2)
console.log(result)