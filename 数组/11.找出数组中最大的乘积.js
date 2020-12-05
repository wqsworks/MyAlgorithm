// 1. 给定一个整数数组，找到从三个整数中产生的最大乘积

// 示例：
// const unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

// computeProduct(unsortedArray); // 21000



var maximumProduct = function (nums) {
  // 1. 排序，时间复杂度nlogn
  let arr = nums.sort((a, b) => {
    return a - b
  })
  let len = arr.length
  return Math.max(arr[0] * arr[1] * arr[len - 1], arr[len - 1] * arr[len - 2] * arr[len - 3])
  // 2.直接for循环，找到最小的两个数和最大的三个数
};

let arr = [-100, -98, -1, 2, 3, 4]
let res = maximumProduct(arr)
console.log(res)