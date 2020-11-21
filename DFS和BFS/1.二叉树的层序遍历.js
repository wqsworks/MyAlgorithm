// 102. 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
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
var levelOrder = function (root) {
  if (root == null) {
    return []
  }
  let res = []
  let queue = []
  queue.push(root)
  while (queue.length) {
    res.push([])
    let len = que.length
    for (let i = 0; i < len; i++) {
      let n = queue.shift()
      if (n.left) {
        queue.push(queue[i].left)
      }
      if (n.right) {
        queue.push(queue[i].right)
      }
      res[res.length - 1].push(n)
    }
  }
  return res
};