var merge = function (nums1, m, nums2, n) {
  let x1 = 0;
  let x2 = 0;
  let arr = nums1.slice(0, m);
  for (let i = 0; i < m + n; i++) {
    if ((arr[x1] < nums2[x2] && x1 < m) || x2 >= n) {
      nums1[i] = arr[x1];
      x1++;
    } else {
      nums1[i] = nums2[x2];
      x2++;
    }
  }
};
