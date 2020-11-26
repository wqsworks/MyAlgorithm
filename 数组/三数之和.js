// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为：[[-1, 0, 1], [-1, -1, 2]]
nums = [-2, 0, 0, 2, 2]

// const threeSum = function (nums) {
//   nums.sort((a, b) => a - b)
//   let len = nums.length
//   let result = []
//   for (let i = 0; i < nums.length; i++) {
//     let left = i + 1
//     let right = len - 1
//     if (i > 0 && nums[i] === nums[i - 1]) {
//       continue
//     }
//     if (nums[i] > 0) {
//       break
//     }
//     while (left < right) {
//       console.log(left, right)
//       if (nums[left] + nums[right] + nums[i] < 0) {
//         console.log(nums[left], nums[right], nums[i])
//         left++
//         while (left < right && nums[left] === nums[left - 1]) {
//           left++
//         }
//       } else if (nums[left] + nums[right] + nums[i] > 0) {
//         console.log(nums[left], nums[right], nums[i])
//         right--
//         while (left < right && nums[right] === nums[right - 1]) {
//           right++
//         }
//       } else {
//         result.push([nums[i], nums[left], nums[right]])
//         left++
//         right--
//         while (left < right && nums[left] === nums[left - 1]) {
//           left++
//         }
//         while (left < right && nums[right] === nums[right - 1]) {
//           right++
//         }
//       }
//     }
//   }
//   return result
// }


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let len = nums.length
  let left, right = len - 1
  let res = []
  nums.sort((a, b) => {
    return a - b
  })
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      break
    }
    left = i + 1
    let cur = -nums[i]
    while (left < right) {
      if (nums[left] + nums[right] == cur) {
        res.push([-cur, nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }

      }
      else if (nums[left] + nums[right] < cur) {
        left++
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else {
        right--
        while (left < right && nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return res
};

let result = threeSum(nums)
console.log(result)