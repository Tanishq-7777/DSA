var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      x++;
    } else if (nums[i] == 0 || i == 5) {
      max = x;
      x = 0;
    }
  }
  return max;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
