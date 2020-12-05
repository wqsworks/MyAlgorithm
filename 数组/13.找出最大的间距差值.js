// 4. 给定一个整数数组，请找出两个元素之间的最大差，较小值的元素必须位于较大元素之前

// 示例：
// const array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

// findLargestDifference(array); // 11  4 和 15

// function findLargestDifference (array) {
//   if (array.length <= 1) return -1;
//   let currentMin = array[0];
//   let currentMaxDifference = 0;

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
//       currentMaxDifference = array[i] - currentMin;
//     } else if (array[i] <= currentMin) {
//       currentMin = array[i];
//     }
//   }

//   if (currentMaxDifference <= 0) return -1;

//   return currentMaxDifference;
// }

function findLargestDifference (arr) {
  let len = arr.length
  if (len <= 1) {
    return -1
  }
  let minIndex = 0
  let maxDifference = 0
  for (let i = 1; i < len; i++) {
    if (arr[i] > arr[minIndex] && arr[i] - arr[minIndex] > maxDifference) {
      maxDifference = arr[i] - arr[minIndex]
    } else if (arr[i] < arr[minIndex]) {
      minIndex = i
    }
  }
  if (maxDifference <= 0) {
    return -1
  }
  return maxDifference
}
const array = [7, 8, 4, 9, 9, 15, 3, 1, 10];

let res = findLargestDifference(array); // 11  4 和 15
console.log(res)