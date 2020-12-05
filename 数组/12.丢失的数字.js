// 268. 丢失的数字
// 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。


// 一个未排序的数组包含 n 个连续数字中的（n-1）个数字，找到缺失的数字，要求时间复杂度为 O(n)

// 进阶：

// 你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?
// https://leetcode-cn.com/problems/missing-number/

// 示例 1： hash列表
// var missingNumber = function (nums, l = nums.length) {
//   var h = nums.reduce((h, num) => {
//     console.log((h))
//     return (h[num] = 1, h)
//   }, {})
//   var i = nums.length + 1
//   while (i--) if (!h[i]) return i
// };

// let arr = [3, 0, 1]
// let res = missingNumber(arr)
// console.log(res)

// 第二种： 数字和
// var missingNumber = function(nums) {
//   let n = nums.length;
//   // 第一步，计算给出数组的总和
//   let sum = nums.reduce((result, item) => {
//       return result + item
//   })
//   // 第二步，计算假设插入数据后有序完整数组的总和
//   let total = (n+1) * n / 2
//   // 第三步，计算差值
//   return total - sum
// };
