//Sum All Numbers in a Range
//We'll pass you an array of two numbers.
//Return the sum of those two numbers plus the sum of all the numbers between them.
//The lowest number will not always come first.

function sumAll(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let biggest = arr[1];
  let smallest = arr[0];
  let temp = 0;
  for (let i = smallest; i <= biggest; i++) {
    temp += i;
  }
  return temp;
}

sumAll([1, 4]);

//Diff Two Arrays
//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
//In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .filter(item => arr2.indexOf(item) === -1)
    .concat(arr2.filter(item => arr1.indexOf(item) === -1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Seek and Destroy
//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. //Remove all elements from the initial array that are of the same value as these arguments.

//Note
//You have to use the arguments object.

function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(item => args.indexOf(item) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);

  return collection.filter(obj =>
    sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  );
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let spinal = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return spinal;
}

spinalCase("This Is Spinal Tap");

// Pig Latin
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let latin = "";
  let regex = /[aeiou]/gi;

  if (str[0].match(regex)) {
    latin = str + "way";
  } else if (str.match(regex) === null) {
    latin = str + "ay";
  } else {
    let vowel = str.indexOf(str.match(regex)[0]);
    latin = str.substr(vowel) + str.substr(0, vowel) + "ay";
  }
  return latin;
}

translatePigLatin("consonant");

// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog".

function myReplace(str, before, after) {
  let arr = str.split(" ");
  let ind = arr.indexOf(before);
  if (arr[ind].charAt(0) === arr[ind].charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  arr[ind] = after;
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let obj = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  let arr = str.split("");
  return arr.map(item => [item, obj[item]]);
}

pairElement("GCG");

// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrAbc = alphabet.split("");
  let startingLetter = arrAbc.indexOf(str[0]);
  arrAbc = arrAbc.slice(startingLetter);
  let missing = "";
  for (let i = 0; i < arrAbc.length; i++) {
    if (str.indexOf(arrAbc[i]) === -1) {
      missing += arrAbc[i];
    }
  }
  return missing[0];
}

fearNotLetter("abce");

// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...arr) {
  let allConcat = [].concat(...arr);
  let newArr = Array.from(new Set(allConcat));
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  str = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
  return str;
}

convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let a = 1;
  let b = 1;
  let sum = 2;

  let x = a + b;
  while (x <= num) {
    if (x % 2 !== 0 && x <= num) {
      sum += x;
    }
    a = b;
    b = x;
    x = a + b;
  }

  return sum;
}

sumFibs(4);

// Sum All Primes
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
  let primes = [];
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    let check = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        check = false;
      }
    }
    sum += check ? i : 0;
  }
  return sum;
}

sumPrimes(10);

// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let max = arr[arr.length - 1];
  let min = arr[0];
  let m = max;

  for (let i = max; i >= min; i--) {
    if (m % i !== 0) {
      m += max;
      i = max;
    }
  }
  return m;
}

smallestCommons([1, 5]);

// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  while (arr.length > 0 && func(arr[0]) !== true) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});

// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  arr = arr.reduce(
    (item1, item2) =>
      Array.isArray(item2)
        ? item1.concat(steamrollArray(item2))
        : item1.concat(item2),
    []
  );

  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  let arr = str.split(" ").map(item => parseInt(item, 2));
  return String.fromCharCode(...arr);
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.

function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" }
  ],
  "sex"
);

// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  let args = arguments;
  let a = args[0];
  let b = args[1];
  function isNumber(num) {
    return typeof num === "number";
  }

  if (isNumber(a)) {
    if (isNumber(b)) return a + b;
    else if (!b)
      return function(b) {
        if (isNumber(b)) return a + b;
      };
  }
}

addTogether(2, 3);

// Make a Person
// Fill in the object constructor with the following methods below:
// getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;

  for (let obj in arr) {
    let orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[obj].avgAlt + earthRadius, 3) / GM)
    );
    delete arr[obj].avgAlt;
    arr[obj].orbitalPeriod = orbitalPeriod;
  }
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
