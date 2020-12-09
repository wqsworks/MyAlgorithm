// 122. 买卖股票的最佳时机 II
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// function maxProfit(prices) {
//   const len = prices.length;
//   if (len < 2) {
//     return 0;
//   };
//   let unhold = 0;	// 当天没有持有的情况下，最大的利润
//   let hold = -prices[0]; // 当天持有的情况下，最大的利润
//   for (let i = 1; i < len; i++) {
//     const temp = unhold;  // 求今天的hold时，要用到昨天的unhold，暂存一下昨天的unhold
//     unhold = Math.max(unhold, hold + prices[i]); // 求今天的unhold
//     hold = Math.max(hold, temp - prices[i]);     // 求今天的hold
//   }
//   return unhold;
// };


// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/solution/shou-hua-tu-jie-xiang-jie-duo-chong-jie-fa-mai-mai/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。