// Largest product in a grid

function main(arr, n) {
  var len = arr.length;
  sum = 0;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      // Forwards
      if (j + n <= len) {
        var horSum = 1;
        for (var k = j; k < j + n; k++) {
          horSum *= arr[i][j + k];
        }
        if (horSum > sum) {
          sum = horSum;
        }
      }
      //Downwards
      if (i + n <= len) {
        var verSum = 1;
        for (var l = i; l < i + n; l++) {
          verSum *= arr[l][j];
        }
        if (verSum > sum) {
          sum = verSum;
        }
      }
      //Diagonal Right
      if (j + n <= len && i + n <= len) {
        var diagSumA = 1;
        for (var m = i; m < i + n; m++) {
          diagSumA *= arr[m][j + m];
        }
        if (diagSumA > sum) {
          sum = diagSumA;
        }
      }
      // Diagonal Left
      if (j - n >= 0 && i + n <= len) {
        var diagSumB = 1;
        for (var o = i; o < i + n; o++) {
          diagSumB *= arr[o][j - o];
        }
        if (diagSumB > sum) {
          sum = diagSumB;
        }
      }
    }
  }
  return sum;
}
