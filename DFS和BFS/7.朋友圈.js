// 547. 朋友圈
// 班上有 N 名学生。其中有些人是朋友，有些则不是。他们的友谊具有是传递性。如果已知 A 是 B 的朋友，B 是 C 的朋友，那么我们可以认为 A 也是 C 的朋友。所谓的朋友圈，是指所有朋友的集合。

// 给定一个 N * N 的矩阵 M，表示班级中学生之间的朋友关系。如果M[i][j] = 1，表示已知第 i 个和 j 个学生互为朋友关系，否则为不知道。你必须输出所有学生中的已知的朋友圈总数。

// https://leetcode-cn.com/problems/friend-circles/


// !!! 不是岛屿问题，要注意
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
  let row = M.length
  let col = M[0].length
  let res = 0
  let visited = {}
  function dfs (i) {
    for (let j = 0; j < col; j++) {
      if (M[i][j] == 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }

  }
  for (let i = 0; i < row; i++) {
    if (!visited[i]) {
      dfs(i)
      res++
    }
  }
  return res
};

let arr1 = [
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1]]

let res = findCircleNum(arr1)
console.log(res)