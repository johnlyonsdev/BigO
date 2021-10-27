
// 1) -------------------------------------------------------
let numbers = [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
// Q: What is the time complexity of the for loop?
// ANSWER: The time complexity of this loop is O(n), because although the length is currently 10. This could change if the array is modified.


// 1.2) You are challenged to find the 4th element of the array, and you came up with this solution:

var count = 1
var answer = 0

for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
        answer = numbers[i]
        return
    } else {
        count += 1
    }
}
// Q: What is the time complexity of of this solution?
// ANSWER: This would still be O(n) as the time to run the for loop is still dependent on what the value of numbers.length is. 


// Q: Could you come up with a solution that has a better time complexity? If so, what is that time complexity?
// ANSWER: I would just use the line 'return numbers[3].' This would have a time complexity of O(1) as this has a set operator used for it's time complexity. 


// 2) -------------------------------------------------------
function printA() {
    for (let i = 0; i < 5; i++) {
        console.log(i)
    }
}
// Q: What is the time complexity of the function?
// ANSWER: This has a time complexity of O(1), as the for loop has a set length that doesn't depend on any variables. 


// 3) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i)
  }
}
// Q: What is the time complexity of the function?
// ANSWER: This has a time complexity of O(n), as the for loop's length depends on the value of the variable number. 


// 4) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j)
    }
  }
}
// Q: What is the time complexity of the function?
// ANSWER: This has a time complexity of O(n*n). This is because this is a nested for loop, that depends on the value of two different variables num and arr.


// 5) -------------------------------------------------------
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(j)
  }
}
// Q: What is the time complexity of the nested for loop?
// ANSWER: This has a time complexity of O(n^2). This is because this is a nested for loop where each loops length is based on the value of numbers.


// 6) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5
})
// Q: What is the time complexity of the filter higher-order function?
// ANSWER: This would be O(n), as the filter function has a linear time complexity. 


// 7) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3
})
// Q: What is the time complexity of the map higher-order function?
// ANSWER: This would be O(n), as the map function has a linear time complexity. 


// 8) -------------------------------------------------------
function removeNum() {
    numbers.splice(3,1)
}
// Q: What is the time complexity of the function?
// ANSWER: This would be O(n), as the splice function has a linear time complexity. 


// 9) -------------------------------------------------------
function insertNum() {
    numbers.splice(3, 0, 19)
}
// Q: What is the time complexity of the function?
// ANSWER: This would be O(n), as the splice function has a linear time complexity. 


// 10) -------------------------------------------------------
function pushNum() {
    numbers.push(25)
}
// Q: What is the time complexity of the function?
// ANSWER: This would be O(n), as the push function has a linear time complexity. 


// 11) -------------------------------------------------------
// Given an array of names....
function printFirstTwoNames(array) {
    console.log(array[0])
    console.log(array[1])
}

// Q: What is the time complexity of the function? Could we write this function differently to accomplish the goal of the function in a faster time complexity?
// ANSWER: The current time complexity is O(1). This is because this is a constant function not depending on any variables length to determine runtime. If we combined the console logs to be one line, it would still be O(1), although it would only run slightly faster.


// Advanced Challenges
// Solve the following challenge. Once complete, determine the time complexity of your solution. Consider if there are ways to solve the challenge with a better time complexity.


// CHALLENGE - SQUARE EVERY NUMBER
//Welcome. In this challenge, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81, 1^2 is 1, 1^2 is 1, and 9^2 is 81. Together, we have 81, 1, 1, 81. Once combined we have 811181.


// Starting Code:
function squareEveryDigit(number) {
  let n = number.toString();
  let splitNum =n.split('')
  for (i=0; i <splitNum.length; i++) {
    splitNum[i]= parseInt(splitNum[i], 10)
    splitNum[i]=splitNum[i]*splitNum[i]
  }
  return splitNum.join('')
}
squareEveryDigit(64) // When running 946, you should see a result of 811636

// This solution would have a time complexity of O(n) depending on the length of the number that is passed into the function. 
