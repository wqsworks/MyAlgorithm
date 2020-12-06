// 数组的去重

var intersection = function (nums1, nums2) {
  let arr1 = Array.from(new Set(nums1));
  let arr2 = Array.from(new Set(nums2));
  console.log(arr1)
  let arr3 = new Array();
  for (let k of arr1) {
    // console.log(k)
    if (arr2.includes(k)) {
      arr3.push(k)
    }
  }
  return arr3;
};


let nums1 = [1, 2, 3, 4, 5, 5, 3]
let nums2 = [4, 2, 4, 6, 1]
let res = intersection(nums1, nums2)
console.log(res)