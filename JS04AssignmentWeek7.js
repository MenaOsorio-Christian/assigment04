/* 
   Author:  Christian Mena-Osorio
   Subject:  Assignment Week 7
   JS4 Coding Assignment 
*/

// create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93
/*   a) Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
     b) Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
     c) Use a loop to iterate through the array and calculate the average age.
*/
console.log('---------- Question 1: ---------------');
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages: " + ages);

// Subtract the value of the first element from the last element programmatically
let result = ages[ages.length - 1] - ages[0];
console.log("Result of first element - last element:", result);

// Add a new age to the array
ages.push(45);
console.log(ages);

// Repeat the subtraction with the new last element
result = ages[ages.length - 1] - ages[0];
console.log("Updated result:", result);

// Calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let average = sum / ages.length;
console.log("Average Age:", average);


/*
  Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 
  'Sally', 'Buck', 'Bob'.
   a) Use a loop to iterate through the array and calculate the average number of letters per name.
   b) Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
*/
console.log('---------- Question 2: ---------------');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name using a loop
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average Letters per Name:", averageLetters);

// Concatenate all the names together, separated by spaces
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}

// The trim() method in JavaScript is used to remove whitespace from the beginning and end of a string
console.log("Concatenated Names:", concatenatedNames.trim());


/*
   How do you access the last element of any array?
*/
console.log('---------- Question 3: ---------------');
// You can access the last element of any array by using the lenght method
let lastElement = ages[ages.length - 1];
console.log("Last Element:", lastElement);


/*
   How do you access the first element of any array?
*/
console.log('---------- Question 4: ---------------');
// you can access the first element of any array by its index
let firstElement = ages[0];
console.log("First Element:", firstElement);


/*
   Create a new array called nameLengths. Write a loop to iterate over the previously 
   created names array and add the length of each name to the nameLengths array.
*/
console.log('---------- Question 5: ---------------');
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  console.log(nameLengths.push(names[i].length));
}


/*
   Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
*/
console.log('---------- Question 6: ---------------');
// Calculate the sum of all elements in the nameLengths array
let sumOfLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
  sumOfLengths += nameLengths[i];
}
console.log("Name Lengths:", nameLengths);
console.log("Sum of Name Lengths:", sumOfLengths);


/*
   Write a function that takes two parameters, word and n, as arguments and returns the word concatenated
   to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return
   'HelloHelloHello').
*/
console.log('---------- Question 7: ---------------');
const concatenateWord = (word, n) => {
   let result = '';
   for (let i = 0; i < n; i++) {
      result += word;
   }
   return result;
};

console.log(concatenateWord('Hello', 3));

/*
  Write a function that takes two parameters, firstName and lastName, and returns a full name. The full 
  name should be the first and the last name separated by a space.
*/
console.log('---------- Question 8: ---------------');
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(getFullName('John', 'Smith'));


/*
  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the 
  array is greater than 100.
*/
console.log('---------- Question 9: ---------------');
// (...numbers) this is a rest parameter that represent an indefinite number of arguments as an array
function isSumGreaterThan100(numbers) {
   return numbers.reduce((sum, num) => sum + num, 0) > 100;
 }
 
 console.log("Function will return true if the sum of the array of numbers is greater then 100: [30, 40, 35]");
 console.log(isSumGreaterThan100([30, 40, 35])); // Output: true


 /*
  Write a function that takes an array of numbers and returns the average of all the elements in the array.
 */
console.log('---------- Question 10: ---------------');
/* (sum, num) => sum + num: is a callback function that is applied to each element of the array. 
  It takes two parameters: sum, which accumulates the result, and num, which represents the current 
  element being processed. In each iteration, it adds the current element (num) to the accumulated sum (sum).
  the reduce method is used to iterate over the elements in the 'numbers' array and acumulates their sum
  */
  function calculateAverage(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
 }
 
 console.log(calculateAverage([10, 20, 30])); // Output: 20
 
 
 /*
  Write a function that takes two arrays of numbers and returns true if the average of the elements in 
  the first array is greater than the average of the elements in the second array.
 */
  console.log('---------- Question 11: ---------------');
  function isAverageGreaterThan(arr1, arr2) {
   return calculateAverage(arr1) > calculateAverage(arr2);
 }
 
 console.log(isAverageGreaterThan([10, 20, 30], [5, 15, 25])); // Output: true
 

 /*
  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
  and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
 */
  console.log('---------- Question 12: ---------------');
  function willBuyDrink(isHotOutside, moneyInPocket) {
   return isHotOutside && moneyInPocket > 10.50;
 }
 
 console.log(willBuyDrink(true, 15.00)); // Output: true
 