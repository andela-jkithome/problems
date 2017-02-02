var fs = require('fs');
var data = fs.readFileSync('./names.txt');
var arr = data.toString().replace(/\"/gi,'').split(',').sort();
console.log(arr);
var len = arr.length;
var totalSum = 0;
for(var i = 0; i < len; i++) {
  var sum = 0;
  var nameLen = arr[i].length;
  for(var j = 0; j < nameLen; j++) {
    var letter = arr[i][j];
    var value = letter.charCodeAt() - 64;
    sum += value;
  }
  totalSum += ((i+1) * sum);
}
console.log(totalSum);