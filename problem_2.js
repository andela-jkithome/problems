// Even Fibonacci numbers

function main() {
  // Initialize values with first two numbers and their sum
  let sum = 2; // Sum is 2 because term 1 is not even
  let temp = 1;
  let temp1 = 2;
  while (temp1 <= 4000000) {
    let temp2 = temp1;
    temp1 += temp;
    temp = temp2
    if (temp1 % 2 === 0) {
      sum += temp1
    }
  }
  return sum;

}
