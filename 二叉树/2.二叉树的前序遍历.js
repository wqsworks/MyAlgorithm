// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

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
 * 
 */
var preorderTraversal = function (root) {
  const res = []
  if (!root) {
    return res
  }
  const stack = []
  stack.push(root)
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur.val)

    if (cur.right) {
      stack.push(cur.right)
    }
    if (cur.left) {
      stack.push(cur.left)
    }
  }
};