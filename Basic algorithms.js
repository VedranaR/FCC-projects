// Convert Celsius to Fahrenheit
// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

reverseString("hello");

// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  let res = num;

  if (num === 0 || num === 1) {
    return 1;
  }

  while (num > 1) {
    num--;
    res *= num;
  }

  return res;
}

factorialize(5);

// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  let arr = str.split(" ").map(w => w.length);

  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  arr.map(subArr =>
    subArr.sort((a, b) => {
      return b - a;
    })
  );
  let arrOfBig = [];
  for (let i = 0; i < arr.length; i++) {
    arrOfBig.push(arr[i].shift());
  }

  return arrOfBig;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose
// of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let n = target.length;
  return str.slice(-n) === target ? true : false;
}

confirmEnding("Bastian", "n");

// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  let repeat = "";
  if (num > 0) {
    for (let i = 1; i <= num; i++) {
      repeat += str;
    }
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let cut;
  if (str.length > num) {
    cut = str.slice(0, num);
    return cut.concat("...");
  } else if (str.length <= num) {
    return (cut = str);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
// Create a function that looks through an array (first argument) and returns the first element in the array that passes a
//truth test (second argument). If no element passes the test, return undefined.

function findElement(arr, func) {
  let test = arr.map(func);
  let i = test.indexOf(true);
  return arr[i];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
  return bool === true || bool === false ? true : false;
}

booWho(null);

// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let res = arr.map(function(item) {
    return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
  });
  return res.join(" ");
}

titleCase("I'm a little tea pot");

// Slice and Splice
// You are given two arrays and an index.
// Use the array methods slice and splice to copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let res = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    res.splice(n, 0, arr1[i]);
    n++;
  }

  return res;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function bouncer(arr) {
  arr = arr.filter(Boolean);
  return arr;
}

bouncer([7, "ate", "", false, 9]);

// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);

// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
  let item1 = arr[0].toLowerCase();
  let item2 = arr[1].toLowerCase();

  return item2.split("").every(letter => item1.indexOf(letter) >= 0);
}

mutation(["hello", "hey"]);

// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let arr2 = [];
  while (arr.length) {
    arr2.push(arr.splice(0, size));
  }

  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
