//  Large sum

function main(nums) {
  var sum = 0;
  len = nums.length;
  for (var i = 0; i < len; i++) {
    sum += nums[i];
  }
  return (sum.toString()).slice(0, 11).replace('.', '');
}
