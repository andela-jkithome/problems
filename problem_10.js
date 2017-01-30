// Summation of primes

function main(num) {
  // Create array with numbers from 2 to n
  var arr = Array.from({ length: num - 2 }, (val, index) => index + 2);

  // for i = 2, 3, 4, ..., not exceeding √n:
  //  if A[i] is true:
  //    for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n :
  //      A[j] := false

  var root = Math.ceil(Math.sqrt(num))
  for(var i= 0; i < root; i++) {
    if(arr[i]) {
      for(var j = arr[i]+ i; j <= num - 2; j+= arr[i]) {
        arr[j] = false;
      }
    }
  }
  var sum = arr.reduce((a, b) => { return a + b;},0);
  console.log(sum)
}