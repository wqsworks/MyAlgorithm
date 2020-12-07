// nums1 = [1, 2, 3, 0, 0, 0], m = 3
// nums2 = [2, 5, 6], n = 3
// 输出: [1, 2, 2, 3, 5, 6]

nums1 = [1, 2, 3, 0, 0, 0], m = 3
nums2 = [0, 3, 6], n = 3
const merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = n + m - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      k--;
      i--;
    } else {
      nums1[k] = nums2[j]
      k--;
      j--;
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  return nums1
}

let result = merge(nums1, m, nums2, n)
console.log(result)