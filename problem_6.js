//Sum square difference

function main(num) {
  var squareSum = (Math.pow(num, 3))/ 3 + (Math.pow(num, 2))/ 2 + num/6,
    sumSquare = Math.pow((Math.pow(num, 2) + num)/2, 2),
    difference = sumSquare - squareSum;
  return difference;
}