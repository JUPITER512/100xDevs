/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let arr1=str1.split('');
    let arr2=str2.split('');

    arr1.sort();
    arr2.sort();
    let result=arr1.join('')===arr2.join('');
    return result
}
module.exports = isAnagram;
