// 33. 搜索旋转排序数组
// 给你一个整数数组 nums ，和一个整数 target 。

// 该整数数组原本是按升序排列，但输入时在预先未知的某个点上进行了旋转。（例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] ）。

// 请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。


// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4





// var search = function(nums, target) {
//   // 1。寻找单调区间
//   // 2。判断target是否在单调区间，若在，则在此侧查找，若不在，则在对侧查找
//   let low = 0, height = nums.length - 1;

//   while (low <= height) {
//     const mid = ~~((low + height) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } 
//     if ( nums[mid] >= nums[low] ){
//       // 左侧单调
//       if(target >= nums[low] && target <= nums[mid]){
//         height = mid - 1
//       } else {
//         low = mid + 1;
//       }
//     } 
//     if ( nums[mid] <= nums[height] ){
//       // 右侧单调
//       if(target >= nums[mid] && target <= nums[height]){
//         low = mid + 1;
//       } else {
//         height = mid - 1;
//       }
//     }
//   }
//   return -1
// };



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + (right - left) / 2
    console.log(mid)
    if (nums[mid] == target) {
      return mid
    }
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1
};
let nums = [1, 3]
let target = 1
let res = search(nums, target)
console.log(res)