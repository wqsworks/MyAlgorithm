// https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
// 给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。

//  

// 示例 1:

// 输入: 12258
// 输出: 5
// 解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
//  
// 链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof


// const translateNum = (num) => {
//   const str = num.toString();
//   const n = str.length;

//   const dp = new Array(n + 1);
//   dp[0] = 1;
//   dp[1] = 1;

//   for (let i = 2; i < n + 1; i++) {
//     const temp = Number(str[i - 2] + str[i - 1]);
//     if (temp >= 10 && temp <= 25) {
//       dp[i] = dp[i - 1] + dp[i - 2];
//     } else {
//       dp[i] = dp[i - 1];
//     }
//   }

//   return dp[n]; // 翻译前n个数的方法数，即翻译整个数字
// }


/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  const str = num.toString()
  let pre = 1
  let cur = 1
  for (let i = 2; i < str.length + 1; i++) {
    let temp = Number(str[i - 2] + str[i - 1])
    if (temp >= 10 && temp <= 25) {
      let t = cur
      cur = pre + cur
      pre = t
    } else {
      pre = cur
    }
  }
  return cur
};