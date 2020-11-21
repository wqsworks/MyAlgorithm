// 给定一个二叉树，返回它的 后序 遍历。

const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // 定义结果数组
  const res = []
  // 处理边界条件
  if (!root) {
    return res
  }
  // 初始化栈结构
  const stack = []
  // 首先将根结点入栈
  stack.push(root)
  // 若栈不为空，则重复出栈、入栈操作
  while (stack.length) {
    // 将栈顶结点记为当前结点
    const cur = stack.pop()
    // 当前结点就是当前子树的根结点，把这个结点放在结果数组的头部
    res.unshift(cur.val)
    // 若当前子树根结点有左孩子，则将左孩子入栈
    if (cur.left) {
      stack.push(cur.left)
    }
    // 若当前子树根结点有右孩子，则将右孩子入栈
    if (cur.right) {
      stack.push(cur.right)
    }
  }
  // 返回结果数组
  return res
};