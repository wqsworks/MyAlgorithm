// 42. 接雨水
// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9


// https://leetcode-cn.com/problems/trapping-rain-water/


var trap = function (height) {

  // 初始化左指针
  let leftCur = 0
  // 初始化右指针
  let rightCur = height.length - 1
  // 初始化最终结果
  let res = 0
  // 初始化左侧最高的柱子
  let leftMax = 0
  // 初始化右侧最高的柱子
  let rightMax = 0

  // 对撞指针开始走路
  while (leftCur < rightCur) {
    // 缓存左指针所指的柱子的高度
    const left = height[leftCur]
    // 缓存右指针所指的柱子的高度
    const right = height[rightCur]
    // 以左右两边较矮的柱子为准，选定计算目标
    if (left < right) {
      // 更新leftMax
      leftMax = Math.max(left, leftMax)
      // 累加蓄水量
      console.log(leftMax, left)
      res += leftMax - left
      // 移动左指针
      leftCur++
    } else {
      // 更新rightMax
      rightMax = Math.max(right, rightMax)
      // 累加蓄水量
      console.log(rightMax, right)
      res += rightMax - right
      // 移动右指针
      rightCur--
    }
  }
  // 返回计算结果
  return res
}


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

trap(height)