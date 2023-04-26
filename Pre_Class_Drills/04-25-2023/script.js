// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// Ex:
// Input: "noon"
// Output: true

// Input: "horse"
// Output: false

// Input: "racecar"
// Output: true

function isPalindrome(str) {
    let strArr = str.split("");
    let revStr = [];
    for (let i=strArr.length; i>=0; i--) {
      revStr.push(strArr[i])
    }
    if (revStr.join("") === str) {
      return true
    } else {
      return false;
    }
  }