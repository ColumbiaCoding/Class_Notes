// Write a function that takes in an array of numbers and outputs the average of all the numbers.

// Ex:
// Input: [ 1 , 4 , 7 ]
// Output: 4

// Input: [ 10, 5 ]
// Output: 7.5

// Input: [ 1.5, 3, 2.5, 1 ]
// Output: 2

const input1 = "the quick brown fox jumps over the calm kitten quietly";
const input2 = "this hat is the greatest!";
const input3 = "what a wonderful day it has been!";

function findAvg(arr){
    let total = 0;
    for (let i =  0; i < arr.length; i++) {
        total += arr[i];
        return total / arr.length;
    }
}

console.log(findAvg([1, 4, 7]));