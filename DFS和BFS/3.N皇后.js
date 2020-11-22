// const solveNQueens = (n) => {
//   const board = new Array(n);
//   for (let i = 0; i < n; i++) {     // 棋盘的初始化
//     board[i] = new Array(n).fill('.');
//   }
//   const res = [];
//   const isValid = (row, col) => {
//     for (let i = 0; i < row; i++) { // 之前的行
//       for (let j = 0; j < n; j++) { // 所有的列
//         if (board[i][j] == 'Q' &&   // 发现了皇后，并且和自己同列/对角线
//           (j == col || i + j === row + col || i - j === row - col)) {
//           return false;             // 不是合法的选择
//         }
//       }
//     }
//     return true;
//   };
//   const helper = (row) => {   // 放置当前行的皇后
//     if (row == n) {           // 递归的出口，超出了最后一行
//       const stringsBoard = board.slice(); // 拷贝一份board
//       for (let i = 0; i < n; i++) {
//         stringsBoard[i] = stringsBoard[i].join(''); // 将每一行拼成字符串
//       }
//       res.push(stringsBoard); // 推入res数组
//       return;
//     }
//     for (let col = 0; col < n; col++) { // 枚举出所有选择
//       if (isValid(row, col)) {          // 剪掉无效的选择
//         board[row][col] = "Q";          // 作出选择，放置皇后
//         helper(row + 1);                // 继续选择，往下递归
//         board[row][col] = '.';          // 撤销当前选择
//       }
//     }
//   };
//   helper(0);  // 从第0行开始放置
//   return res;
// };



const solveNQueens = (n) => {
  const board = new Array(n)
  for (let i = 0; i < n; i++) {
    board[i] = new Array(n).fill('.')
  }
  // console.log(board)
  const res = []
  let cols = new Set()
  let diagonal1 = new Set()
  let diagonal2 = new Set()
  function helper (row) {
    // console.log(row, n)
    if (row === n) {
      let cur = board.slice()
      for (let i = 0; i < n; i++) {
        // console.log(cur[i])
        cur[i] = cur[i].join('')
        // console.log(res)
      }
      res.push(cur)
      return
    }
    for (let col = 0; col < n; col++) {
      // console.log(cols.has(col))
      if (!cols.has(col) && !diagonal1.has(col + row) && !diagonal2.has(col - row)) {
        // console.log(row, col)
        cols.add(col)
        diagonal1.add(col + row)
        diagonal2.add(col - row)
        board[row][col] = 'Q'
        helper(row + 1)
        board[row][col] = '.'
        cols.delete(col)
        diagonal1.delete(col + row)
        diagonal2.delete(col - row)
      }
    }
  }
  helper(0)
  return res
};


let result = solveNQueens(4)
console.log(result)