// // 快速排序入口
// function quickSort (arr, left = 0, right = arr.length - 1) {
//   // 定义递归边界，若数组只有一个元素，则没有排序必要
//   if (arr.length > 1) {
//     // lineIndex表示下一次划分左右子数组的索引位
//     const lineIndex = partition(arr, left, right)
//     // 如果左边子数组的长度不小于1，则递归快排这个子数组
//     if (left < lineIndex - 1) {
//       // 左子数组以 lineIndex-1 为右边界
//       quickSort(arr, left, lineIndex - 1)
//     }
//     // 如果右边子数组的长度不小于1，则递归快排这个子数组
//     if (lineIndex < right) {
//       // 右子数组以 lineIndex 为左边界
//       quickSort(arr, lineIndex, right)
//     }
//   }
//   return arr
// }
// // 以基准值为轴心，划分左右子数组的过程
// function partition (arr, left, right) {
//   // 基准值默认取中间位置的元素
//   let pivotValue = arr[Math.floor(left + (right - left) / 2)]
//   // 初始化左右指针
//   let i = left
//   let j = right
//   // 当左右指针不越界时，循环执行以下逻辑
//   while (i <= j) {
//     // 左指针所指元素若小于基准值，则右移左指针
//     while (arr[i] < pivotValue) {
//       i++
//     }
//     // 右指针所指元素大于基准值，则左移右指针
//     while (arr[j] > pivotValue) {
//       j--
//     }

//     // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
//     if (i <= j) {
//       swap(arr, i, j)
//       i++
//       j--
//     }
//   }
//   // 返回左指针索引作为下一次划分左右子数组的依据
//   return i
// }

// // 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
// function swap (arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }


// var quickSort = function (arr) {
//   if (arr.length <= 1) { return arr; }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   console.log(arr)
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// };

let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0]
let res = quickSort(arr)
// console.log(res)

var quickSort = function (arr) {
  if (arr.length < 1) {
    return arr
  }
  let l = 0
  let r = arr.length - 1
  console.log(l, r)
  let middleIndex = l + parseInt((r - l) / 2)
  // let middleIndex = Math.floor(arr.length / 2)
  let middle = arr.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([middle], quickSort(right))
}


let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0, 1]
let res = quickSort(arr)
console.log(res)


function quickSort (arr) {
  if (arr.length < 1) {
    return arr
  }
  let l = 0, r = arr.length
  let middleIndex = l + parseInt((r - l) / 2)
  let middle = arr.splice(middleIndex, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= middle) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([middle], quickSort(right))
}
let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0, 1]
let res = quickSort(arr)
console.log(res)