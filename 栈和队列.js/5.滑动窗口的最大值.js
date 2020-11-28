// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。
// nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 

//  
// 链接：https://leetcode-cn.com/problems/sliding-window-maximum


/**1 2 3 4 7 2 3
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let len = nums.length
  let deque = []
  let result = []
  for (let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    if(deque[0] <= i - k) {
      deque.shift()
    }

    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }

  }
  return result
};

let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

let res = maxSlidingWindow(nums, k)
console.log(res)