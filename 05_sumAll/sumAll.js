const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let sum = 0;
  let smallNumber, largeNumber;

  if (num1 < num2) {
    smallNumber = num1;
    largeNumber = num2;
  } else {
    smallNumber = num2;
    largeNumber = num1;
  }

  for (let i = smallNumber; i <= largeNumber; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
