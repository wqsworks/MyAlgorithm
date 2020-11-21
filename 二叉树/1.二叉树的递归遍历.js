const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E",
      left: {
        val: "EL"
      },
      right: {
        val: "ER"
      }

    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

// 先序遍历
function preorder (root) {
  if (!root) {
    return
  }
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}


// 中序遍历
function inorder (root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }

  // 递归遍历左子树 
  inorder(root.left)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
  // 递归遍历右子树  
  inorder(root.right)
}


// 后序遍历
function postorder (root) {
  // 递归边界，root 为空
  if (!root) {
    return
  }

  // 递归遍历左子树 
  postorder(root.left)
  // 递归遍历右子树  
  postorder(root.right)
  // 输出当前遍历的结点值
  console.log('当前遍历的结点值是：', root.val)
}

// inorder(root)
postorder(root)