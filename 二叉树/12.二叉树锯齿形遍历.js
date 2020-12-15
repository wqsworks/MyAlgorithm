// 103. 二叉树的锯齿形层次遍历
// 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层次遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
// ]
// https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

// var zigzagLevelOrder = function(root) {
//   if (root === null) {
//     return []
//   } else {
//     let res = []
//     function traversal (root, depth) {
//       if (root !== null) {
//         if (res[depth] === undefined) {
//           res[depth] = []
//         }
//         if (depth & 1) {
//           res[depth].unshift(root.val)
//         } else {
//           res[depth].push(root.val)
//         }
//         traversal(root.left, depth + 1)
//         traversal(root.right, depth + 1)
//       }
//     }
//     traversal(root, 0)
//     return res
//   }
// }


// 作者：magisilk
// 链接：https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen-9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let res = []
  if (!root) {
    return res
  }
  let queue = []
  queue.push(root)
  while (queue.length) {
    res.push([])
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let temp = queue.shift()
      res.length % 2 == 1 ? res[res.length - 1].push(temp.val) : res[res.length - 1].unshift(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      }
      if (temp.right) {
        queue.push(temp.right)
      }
    }
  }
  return res
};