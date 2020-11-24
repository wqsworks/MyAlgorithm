/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {

  let preL = 0
  let preR = preorder.length - 1
  let inL = 0
  let inR = inorder.length
  function buildTree (preL, preR, inL, inR) {
    if (preL > preR) {
      return null
    }
    let root = new TreeNode()
    root.val = preorder[preL]
    let k = inorder.indexOf(root.val)
    let numsL = k - inL
    root.left = buildTree(preL + 1, preL + numsL, inL, k - 1)
    root.right = buildTree(preL + numsLeft + 1, preR, k + 1, inR)
  }

  return buildTree(preL, preR, inL, inR)
};