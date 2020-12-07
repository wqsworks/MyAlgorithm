// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。
// 示例 1：
// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6
// 示例 2：

// 输入：lists = []
// 输出：[]
// 示例 3：

// 输入：lists = [[]]
// 输出：[]

// 链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
// 答案链接：链接：https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/23-he-bing-kge-pai-xu-lian-biao-by-alexer-660/



// 1.分治的思想，不断地2个2个链表进行合并

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function merge (l1, l2) {
    let dummy = new ListNode()
    let cur = dummy
    while (l1 && l2) {
      if (l1.val <= l2.val) {
        cur.next = l1
        l1 = l1.next
      } else {
        cur.next = l2
        l2 = l2.next
      }
      cur = cur.next
    }
    cur.next = l1 !== null ? l1 : l2
    return dummy.next
  }
  function mergeTwoList (arrLists) {
    if (arrLists.length <= 1) {
      return arrLists[0] || null
    }
    let listArray = []
    for (let i = 0; i < arrLists.length; i += 2) {
      listArray.push(merge(arrLists[i], arrLists[i + 1] || null))
    }
    return mergeTwoList(listArray)
  }
  return mergeTwoList(lists)
};


// 2.将链表中元素取出来放到数组里，排序，在合并成一个链表 时间复杂度都是nlogk
// var mergeKLists = function (lists) {
//   if (!lists || lists.length == 0) return null;
//   let arr = [];
//   let res = new ListNode(0);
//   lists.forEach(list => {
//     let cur = list;
//     while (cur) {
//       arr.push(cur.val);
//       cur = cur.next;
//     }
//   })
//   let cur = res;
//   arr.sort((a, b) => a - b).forEach(val => {
//     let node = new ListNode(val);
//     cur.next = node;
//     cur = cur.next;
//   })
//   return res.next;
// };

