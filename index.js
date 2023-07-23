// Ex1.1 - Yes or No

function yesOrNo(boolean) {
  return boolean === true ? "Yes" : "No";
}

// console.log(yesOrNo(true));
// console.log(yesOrNo(false));
//
//
//
// Ex2.1 - Sum of lowest numbers

const sumOfTwoLowest = (numArray) => {
  numArray.sort((a, b) => a - b);
  return numArray[0] + numArray[1];
};

// console.log(sumOfTwoLowest([19, 5, 42, 2, 77]));
// console.log(sumOfTwoLowest([10, 343445353, 3453445, 3453545353453]));
//
//
//
// Ex2.2 - One and Zero - Binary

const binaryArray = [1, 0, 0, 1];

parseInt(binaryArray.join(""), 2);
//
//
//
// Ex2.3 - Find the Next Perfect Square

function findNextSquare(square) {
  return Number.isInteger(Math.sqrt(square))
    ? Math.pow(Math.sqrt(square) + 1, 2)
    : -1;
}

// console.log(findNextSquare(625));
//
//
//
// Ex2.4 - Unique

const numbers = [1, 1, 2, 1, 1, 1];

const findUniq = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === numbers[i + 1]) {
      continue;
    } else {
      return numbers[i] === numbers[(i + 2) % numbers.length]
        ? numbers[i + 1]
        : numbers[i];
    }
  }
};

// console.log(findUniq(numbers));
//
//
//
// Ex2.5 - Summation

const summation = (num) => (num * (1 + num)) / 2;

// console.log(summation(8));
//
//
//
// Ex2.6 - Years and Centuries

const centuryFromYear = (year) => Math.ceil(year / 100);

// console.log(centuryFromYear(1601));
//
//
//
// Ex2.7 - Basic Math

const basicOp = (op, value1, value2) => {
  switch (op) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
  }
};

// console.log(basicOp("/", 49, 7));
//
//
//
// Ex3.1 - Growth Of population

const nb_year = (p0, percent, aug, p) => {
  let counter = 0;
  let currentP = p0;
  while (currentP <= p) {
    currentP = parseInt(currentP + currentP * (percent / 100) + aug);
    counter++;
  }
  return counter;
};

// console.log(nb_year(1500000, 2.5, 10000, 2000000));
//
//
//
// Ex3.2 - People on the Bus
//
//
//
// Ex4.1 - Fibonacci

const findElementInFibonacci = (n) => {
  let a = 0,
    b = 1,
    c;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
};

// console.log(findElementInFibonacci(10));
//
//
//
// Ex4.2 - Tribonacci

const tribonacci = (signature, n) => {
  let [a, b, c] = [...signature];
  let d;
  let sequence = [...signature];
  if (n === 0) {
    return [];
  }
  for (let i = 3; i <= n; i++) {
    d = a + b + c;
    sequence.push(d);
    a = b;
    b = c;
    c = d;
  }
  return sequence;
};

// console.log(tribonacci([1, 1, 1], 10));
//
//
//
// Ex5.1 - trimming string

const trimString = (str) => str.slice(1, -1);

// console.log(trimString('something'));
//
//
//
// Ex5.2 - String Repeat

const repeatStr = (count, str) => str.repeat(count);

// console.log(repeatStr(5, 'Hello'));
//
//
//
// Ex5.3 - To Camel Case

const toCamelCase = (str) => {
  let camelCaseStr = str
    .replaceAll("-", "_")
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
  if (str[0] === str[0].toLowerCase()) {
    camelCaseStr = camelCaseStr[0].toLowerCase() + camelCaseStr.slice(1);
  }
  return camelCaseStr;
};

console.log(toCamelCase("The_Stealth_Warrior"));
