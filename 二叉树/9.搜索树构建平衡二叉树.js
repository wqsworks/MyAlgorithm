
// 1382. 将二叉搜索树变平衡
// 给你一棵二叉搜索树，请你返回一棵 平衡后 的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。

// 如果一棵二叉搜索树中，每个节点的两棵子树高度差不超过 1 ，我们就称这棵二叉搜索树是 平衡的 。

// 如果有多种构造方法，请你返回任意一种。
// https://leetcode-cn.com/problems/balance-a-binary-search-tree/ 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var balanceBST = function (root) {
  let treeArray = []
  function orderBianaryTree (root) {
    if (!root) {
      return null
    }
    orderBianaryTree(root.left)
    treeArray.push(root.val)
    orderBianaryTree(root.right)
  }
  orderBianaryTree(root)
  function buildAVL (low, high) {
    if (low > high) {
      return null
    }
    const middle = Math.floor((low + high) / 2)
    const cur = new TreeNode(treeArray[middle])
    cur.left = buildAVL(low, middle - 1)
    cur.right = buildAVL(middle + 1, high)
    return cur
  }
  return buildAVL(0, treeArray.length - 1)
};
