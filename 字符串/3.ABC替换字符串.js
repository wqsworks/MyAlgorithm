// //原生indexOf重写用来查找
// String.prototype.myIndexOf = function (str) {
//   let sourceArr = this.split('');
//   let num = -1;
//   for (let i in sourceArr) {
//     if (sourceArr[i] === str.slice(0, 1)) {
//       if (str === this.slice(i, Number(i) + str.length)) {
//         num = i
//       }
//     }
//   }
//   return num
// }

// //原生Map重写用来替换
// Array.prototype.myMap = function (fn, context) {
//   let arr = this;
//   let temp = [];
//   for (let j = 0; j < arr.length; j++) {
//     let result = fn.call(context, arr[j], j, arr);
//     temp.push(result);
//   }
//   return temp;
// }

// let a1 = 'aaaBb13cccBb13ffBb13';
// let b1 = 'Bb13';
// let c1 = 'Cc4';

// function find (a, b, c) {
//   while (true) { //while a中没有b时结束
//     let findnum = a.indexOf(b); //获取a中b的开始下标
//     if (findnum != -1) { //通过下标查询
//       let Aarr = a.split(''); //切割成数组
//       a = '';
//       let count = 0;
//       Aarr.myMap((item, index) => {
//         if (index >= findnum && index < findnum + b.length) {
//           if (count == 0) {
//             a += c;
//           }
//           count++;
//         } else {
//           a += Aarr[index];
//         }
//       })
//     } else {
//       return a;
//     }
//   }
// }
// let f = find(a1, b1, c1);
// console.log(f);


function findB (a, b) {
  let result = []
  let num = -1
  let arr1 = a.split('')
  for (let i in arr1) {
    if (arr1[i] == b.slice(0, 1)) {
      // console.log(arr1[i])
      // console.log(b.slice(0, 1))
      let count = Number(i)
      // console.log(a.slice(count, count + b.length))
      // console.log(b)
      if (a.slice(count, count + b.length) === b) {
        result.push(count)
      }
    }
  }
  return result
}

// let a1 = 'aaaBb13cccBb13ffBb13';
// let b1 = 'Bb13';
// let c1 = 'Cc4';

let a1 = 'abababbbb';
let b1 = 'b';
let c1 = 'C';
// let result = findB(a1, b1)
// console.log(result)

function findString (a, b, c) {
  let result = findB(a, b)
  let arr = a.split('')
  result.forEach((item) => {
    arr.splice(item, b.length, c)
  })
  a = arr.join('')
  console.log(a)
  return a
}  

findString(a1, b1, c1)

// let