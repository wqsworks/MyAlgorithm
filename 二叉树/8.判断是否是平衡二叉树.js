// 题目描述：给定一个二叉树，判断它是否是高度平衡的二叉树。
// https://leetcode-cn.com/problems/balanced-binary-tree/


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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = true

  function dfs (root) {
    if (!root || !flag) {
      return 0
    }
    let left, right
    left = dfs(root.left)
    right = dfs(root.right)
    if (Math.abs(left - right) > 1) {
      flag = false
      return 0
    }
    return Math.max(left, right) + 1
  }

  dfs(root)

  return flag
};
