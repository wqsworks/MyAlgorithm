// 112. 路径总和
// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

// 说明: 叶子节点是指没有子节点的节点。

// 示例: 
// 给定如下二叉树，以及目标和 sum = 22，
// https://leetcode-cn.com/problems/path-sum/description/?utm_source=LCUS&utm_medium=ip_redirect&utm_campaign=transfer2china

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root == null) return false
  if (root.left == null && root.right == null) {
    return sum - root.val == 0
  }
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};