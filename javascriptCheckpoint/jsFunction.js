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