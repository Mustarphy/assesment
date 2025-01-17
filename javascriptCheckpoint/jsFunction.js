//Reverse a String

function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(reverseString("Hello")); //the output should be Hello


//Count Characters

function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("hello world"));//the output should be 11

//Capitalize Words

function capitalizeWords(sentence) {
  return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

//Array Functions Find Maximum and Minimum

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMax([1, 2, 3, 4, 5])); //the output should be 5
console.log(findMin([1, 2, 3, 4, 5]));//the output should be 1


//Sum of Array


function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30, 40, 50])); // Output: 150


//Filter Array


function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], x => x % 2 === 0)); // Output: [2, 4]
console.log(filterArray([1, 2, 3, 4, 5], x => x > 3)); // Output: [4, 5]

//Mathematical Functions

//Factorial


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6


//Prime Number Check


function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5)); // Output: true
console.log(isPrime(4)); // Output: false
console.log(isPrime(7)); // Output: true


//Fibonacci Sequence


function fibonacci(n) {
    let fibSequence = [0, 1];
    while (fibSequence.length < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
