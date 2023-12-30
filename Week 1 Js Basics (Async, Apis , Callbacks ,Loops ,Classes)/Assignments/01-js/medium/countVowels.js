/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const vowels=['a', 'e', 'i','o', 'u'];
    let numberOfVowels=0;
    for (let i=0; i<str.length; i++) {
      if(vowels.includes(str[i].toLowerCase())) {
        numberOfVowels++;
      }
    }
    return numberOfVowels;
}


// Test cases
console.log(countVowels("hello")); // Output: 2 (e, o are vowels)
console.log(countVowels("world")); // Output: 1 (o is a vowel)
console.log(countVowels("JavaScript")); // Output: 3 (a, e, a are vowels)
console.log(countVowels("OpenAI")); // Output: 4 (o, e, A, I are vowels)
console.log(countVowels("test case")); // Output: 4 (e, e, a, e are vowels)
console.log(countVowels("")); // Output: 0 (empty string has no vowels)
console.log(countVowels("12345")); // Output: 0 (no vowels in numbers)

module.exports = countVowels;