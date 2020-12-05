// 238. 除自身以外数组的乘积
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
// https://leetcode-cn.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let len = nums.length
  let output = []
  let temp = 1
  for (let i = 0; i < len; i++) {
    output[i] = temp
    temp *= nums[i]
  }
  temp = 1
  for (let i = len - 1; i > 0 - 1; i--) {
    output[i] *= temp
    temp *= nums[i]
  }
  return output
};

let array = [1, 2, 3, 4]
let res = productExceptSelf(array)
console.log(res)
