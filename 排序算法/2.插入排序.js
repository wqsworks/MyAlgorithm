// function insertSort(arr) {
//   // 缓存数组长度
//   const len = arr.length
//   // temp 用来保存当前需要插入的元素
//   let temp  
//   // i用于标识每次被插入的元素的索引
//   for(let i = 1;i < len; i++) {
//     // j用于帮助 temp 寻找自己应该有的定位
//     let j = i
//     temp = arr[i]  
//     // 判断 j 前面一个元素是否比 temp 大
//     while(j > 0 && arr[j-1] > temp) {
//       // 如果是，则将 j 前面的一个元素后移一位，为 temp 让出位置
//       arr[j] = arr[j-1]   
//       j--
//     }
//     // 循环让位，最后得到的 j 就是 temp 的正确索引
//     arr[j] = temp
//   }
//   return arr
// }


function insertSort (arr) {
  let len = arr.length
  let temp
  for (let i = 1; i < len; i++) {
    temp = arr[i]
    let j = i
    while (j > 0 && temp < arr[j - 1]) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}
let arr = [3, 6, 1, 5, 8, 2, 5, 10, 3, 4, 6, 0]
let res = insertSort(arr)
console.log(res)