// 78. 子集
// 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。

// 说明：解集不能包含重复的子集。

// 示例:

// 输入: nums = [1,2,3]
// 输出:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = []
  let len = nums.length
  let subset = []
  function bfs (index) {
    // console.log(subset.slice())
    res.push(subset.slice())
    // console.log(res)
    for (let i = index; i < len; i++) {
      subset.push(nums[i])
      bfs(i + 1)
      subset.pop()
    }
  }
  bfs(0)
  return res
};

let nums = [1, 2, 3]
let result = subsets(nums)
console.log(result)