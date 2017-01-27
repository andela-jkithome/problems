//  Smallest multiple

function main(num) {
  var arr = Array.from({ length: num }, (val, index) => index + 1);

  for (var i = 1; i < num; i++) {
    for (var j = i + 1; j < num; j++) {
      if (arr[j] % arr[i] === 0) {
        arr[j] = arr[j] / arr[i];
      }
    }
  }
  var product = arr.reduce((a, b) => {
    return a * b;
  }, 1)
  return product;
}
