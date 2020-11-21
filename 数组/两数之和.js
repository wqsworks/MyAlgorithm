// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。


const nums = [2, 7, 11, 15], target = 9


// // Map方法
// const twoSum = function (nums, target) {
//   let result = []
//   let map = new Map()
//   let len = nums.length
//   for (let i = 0; i < len; i++) {
//     result[0] = i
//     if (map.has(nums[i])) {
//       return [map.get(nums[i]), i]
//     } else {
//       map.set(target - nums[i], i)
//     }
//   }
// }

// console.log(twoSum(nums, target))

// 双指针  需要有序数组