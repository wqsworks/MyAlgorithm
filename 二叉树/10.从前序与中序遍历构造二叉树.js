// 105. 从前序与中序遍历序列构造二叉树
// 根据一棵树的前序遍历与中序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  let preL, preR, inL, inR
  let len = preorder.length
  function build (preL, preR, inL, inR) {
    if (preL > preR) {
      return null
    }
    let root = new TreeNode()
    root.val = preorder[preL]
    let k = inorder.indexOf(preorder[preL])
    let numsLeft = k - inL
    root.left = build(preL + 1, preL + numsLeft, inL, k - 1)
    root.right = build(preL + numsLeft + 1, preR, k + 1, inR)
    return root
  }
  return build(0, len - 1, 0, len - 1)
};