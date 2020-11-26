// 25. K 个一组翻转链表
// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。



// 示例：

// 给你这个链表：1->2->3->4->5

// 当 k = 2 时，应当返回: 2->1->4->3->5

// 当 k = 3 时，应当返回: 3->2->1->4->5

var reverseKGroup = function (head, k) {
  // 这个方法专门用来翻转指定范围（以head为起点）内的k个结点
  function reverse (head) {
    // 初始化 pre、cur、next三剑客
    let pre = null, cur = head, next = null
    // 遍历当前范围结点
    while (cur) {
      // 缓存next
      next = cur.next
      // 翻转当前结点的next指针
      cur.next = pre
      // pre、cur各前进一步，为下一个指针的翻转做准备
      pre = cur
      cur = next
    }
    // 翻转到最后，pre会指向最末尾的结点，也就是翻转后的第一个结点
    return pre
  }
  // 有dummy指针好办事
  let dummy = new ListNode()
  dummy.next = head
  // pre用来缓存当前这一截k个结点的链表前驱的那个结点（不丢头）
  let pre = dummy
  // start指向k个一组的局部链表中的第一个
  let start = head
  // end指向k个一组的局部链表中的最后一个
  let end = head
  // next用来缓存当前这一截k个结点的链表后继的那个结点（不丢尾）
  let next = head
  // 当后继结点存在时，持续遍历
  while (next) {
    // 找到k个结点中的最后一个
    for (let i = 1; i < k && end; i++) {
      end = end.next
    }
    // 如果不满k个，直接返回
    if (!end) {
      break
    }
    // 缓存这k个结点的后继结点
    next = end.next
    // 这一步把end.next置为null，是为了配合reverse方法
    end.next = null
    // 手动把end指向start（因为下面reverse完start就会改变）
    end = start
    // 以start为起点翻转k个结点
    start = reverse(start)
    // 接上尾巴
    end.next = next
    // 接上头
    pre.next = start
    // pre、start、end一起前进，为下一次翻转做准备 
    pre = end
    start = next
    end = start
  }
  // dummy.next指向的永远是链表的第一个结点
  return dummy.next
};
