// Non-abundant sums

function main() {
  let totalSum = 0;
  let arr = [];
  // Add all abundant numbers to arr
  for (let i = 12; i <= 28123; i++) {
    let abundant = false;
    if (isAbundant(i)) {
      arr.push(i);
    }
  }
  let len = arr.length;
  let abudantSum = [];
  // Get all numbers that are the sum of two abundant numbers less than 28123
  for (let j = 0; j < len; j++) {
    for (let k = j; k < len; k++) {
      if ((arr[j] + arr[k]) <= 28123) {
        abudantSum.push((arr[j] + arr[k]));
      }
    }
  }
  // Make an array of all nuratural numbers from 1 to 28123
  let nums = Array.from({ length: 28123 }, (val, index) => index + 1);
  let a = new Set(nums);
  let b = new Set(abudantSum);
  // Get all numbers that are not the sums of abundant numbers
  let difference = new Set([...a].filter(x => !b.has(x)));
  let nonAbudantSum = Array.from(difference);
  // Sum all non-abundant sums
  let sum = nonAbudantSum.reduce((a, b) => {
    return a + b; }, 0);
  return sum;
}


function isAbundant(num) {
  let root = Math.floor(Math.sqrt(num));
  let arr = [1];
  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      let upperDivisor = num / i;
      if (upperDivisor !== i) {
        arr = [...arr, i, upperDivisor];
      } else {
        arr = [...arr, i];
      }

    }
  }
  let sum = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  if (sum > num) {
    return true;
  }
  return false;
}

main();
