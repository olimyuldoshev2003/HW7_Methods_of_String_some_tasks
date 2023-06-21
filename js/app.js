// Task 1
// function modifyLast(word, timesOfRepeat) {
//   let newWord = word,modulOfWord,
//     lastWord;
//   for (let i = 0; i < word.length; i++) {
//     lastWord = newWord.at(i).repeat(timesOfRepeat);
//     modulOfWord = newWord.slice(0, i);
//   }
//   return modulOfWord.concat(lastWord);
// }

// console.log(modifyLast("Hello", 10));
// console.log(modifyLast("Hey", 2));

// Task 2
// function firstLast(str) {
//     let firstWord, lastWord;
//     for(let i = 0; i < str.length; i++) {
//         firstWord = str.at(0);
//         lastWord = str.at(i);
//     }
//     return `${firstWord}${lastWord}`;
// }

// console.log(firstLast("shiva"));
// console.log(firstLast("ganesh"));

// Task 3.1
// function toInt(str) {
//     return Number(str);
// }

// console.log(toInt("10100111"));

// Task 3.2

// function toStr(num) {
//     return num.toString();
// }

// console.log(toStr(10101));

// Task 4

// function isPlural(word) {
//     for(let i = 0; i < word.length; i++) {
//         if(word.at(i-1) === "s") {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// console.log(isPlural("repositories"));

// Task 5
// function reverseCapitalize(str) {
//     return str.split("").reverse().join("").toUpperCase();
// }

// console.log(reverseCapitalize("abc"));
// console.log(reverseCapitalize("hellothere"));

// Task 6 This task is undefined.

// function checkEnding(str1, str2) {
//     return `${str2} ${str1}`
// }

// console.log(checkEnding("abc", "c"));

// Task 7
// function checkPalindrome(str) {
//     let counter = 0;
//     for(let i = 1; i <= str.length; i++) {
//         if(str[i - 1] === str[str.length - i]) {
//             counter++;
//         }
//     }
//     return counter === str.length;
// }

// console.log(checkPalindrome("mom"));
// console.log(checkPalindrome("scary"));
// console.log(checkPalindrome("reviver"));

// Task 8
// function charCount(lookingForWord, word) {
//   let counter = 0;
//   for(let i = 0; i < word.length; i++) {
//     if(word.at(i) === lookingForWord) {
//       counter++;
//     }
//   }

//   return counter;
// }

// console.log(charCount("a", "edabit"));
// console.log(charCount("c", "Chamber of secrets"));
// console.log(charCount("b", "big fat bubble"));

// Task 9

// function capToFront(str) {
//     let uppercaseWord = "";
//     let lowercaseWord = "";
//     for(let i = 0; i < str.length; i++) {
//         if(str.at(i).toUpperCase() === str.at(i)) {
//             uppercaseWord += str.at(i);
//         } else {
//             lowercaseWord += str.at(i);
//         }
//     }
//     return `${uppercaseWord}${lowercaseWord}`;
// }

// console.log(capToFront("hApPy"));
// console.log(capToFront("moveMENT"));
// console.log(capToFront("shOrtCAKE"));

// Task 10

// function reverseAndNot(num) {
//     let convertToStr = num.toString().split("").reverse().join("")
//     return `${Number(convertToStr)}${num}`;
// }

// console.log(reverseAndNot(123));
// console.log(reverseAndNot(152));
// console.log(reverseAndNot(123456789));

// Task 11.1.

// function giveMeSomething(centenseOrWord) {
//     let newWord = "something "
//     let addNewWord = newWord.concat(centenseOrWord);
//     return addNewWord;
// }

// console.log(giveMeSomething("is better than nothing"));
// console.log(giveMeSomething("Bob Jane"));
// console.log(giveMeSomething("something"));

// Task 11.2.

// function boolToString(boolean) {
//     return boolean? `"true"` : `"false"`;
// }

// console.log(boolToString(true));
// console.log(boolToString(false));

// Task 15

// function stringInt(str) {
//     return Number(str);
// }

// console.log(stringInt("6"));
// console.log(stringInt("1000"));
// console.log(stringInt("12"));

// Task 16

// function greeting(myLove) {
//     if(myLove === `Mubashir`) return `Hello, my love`;
//     else return `Hello, ${myLove}`
// }

// console.log(greeting("Mubashir"));
// console.log(greeting("Matt"));

// Task 17.1.

// function comp(str1, str2) {
//     if(str1.length === str2.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(comp("AB", "CD"));

// Task 17.2.

// function replaceVowel(str) {
//     str = str.replace("a", 1)
//     str = str.replace("e", 2)
//     str = str.replace("i", 3)
//     str = str.replace("o", 4)
//     str = str.replace("u", 5)
//     return str;
// }

// console.log(replaceVowel("harachi"));
// console.log(replaceVowel("chembur"));
// console.log(replaceVowel("khandbari"));

// Task 18

// function removeABC(wordOrCentense) {
//   if (!/[abc]/.test(wordOrCentense)) {
//     return null;
//   }
//   return wordOrCentense.replace(/[abc]/g, "");
// }

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

