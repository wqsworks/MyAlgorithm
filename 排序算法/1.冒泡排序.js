// function betterBubbleSort(arr) {
//   const len = arr.length  
//   for(let i=0;i<len;i++) {
//       // 注意差别在这行，我们对内层循环的范围作了限制
//       for(let j=0;j<len-1-i;j++) {
//           if(arr[j] > arr[j+1]) {
//               [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//           }
//       }
//   }
//   return arr
// }

function betterBubbleSort (arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    // 区别在这里，我们加了一个标志位
    let flag = false
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // 只要发生了一次交换，就修改标志位
        flag = true
      }
    }

    // 若一次交换也没发生，则说明数组有序，直接放过
    if (flag == false) return arr;
  }
  return arr
}