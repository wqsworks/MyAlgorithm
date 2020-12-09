// 121. 买卖股票的最佳时机
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。



// 示例 1:

// 输入: [7, 1, 5, 3, 6, 4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6 - 1 = 5 。
// 注意利润不能是 7 - 1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/

// let maxProfit = function(prices) {
//   let max = 0, minprice = prices[0]
//   for(let i = 1; i < prices.length; i++) {
//       minprice = Math.min(prices[i], minprice)
//       max = Math.max(max, prices[i] - minprice)
//   }
//   return max
// }

// 作者：user7746o
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/teng-xun-leetcode121mai-mai-gu-piao-de-zui-jia-shi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。