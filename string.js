// 3. Write a JavaScript function to split a string and convert it into an array of words.

// const x = (str) => {
//     const arr = str.split("");
//     return arr
// }

// console.log(x("string"))


// 4. Write a JavaScript function to extract a specified number of characters from a string

// const x = (str, num) => {
//     const arr = str.slice(0,num);
//     return arr
// }

// console.log(x("string", 4))


// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.

// const x = (str) => {
//     const arr = str.split("@")
//     arr[0] = arr[0].slice(0,5) + "...";
//     const res = arr.join("@");
//     return res
// }


// console.log(x("santoshSingh@gmail.com"));



// 7. Write a JavaScript function to parameterize a string.

// const x = (str, para) => {
//     const res = str.replace(/ /g, para);
//     return res
// }

// console.log(x("santosh singh from", "-"))



// 8. Write a JavaScript function to capitalize the first letter of every word string.

// const x = (str) => {
//     const arr = str.split(" ");
//     for(let i=0; i<arr.length; i++){
//         arr[i] = (arr[i].slice(0,1)).toUpperCase() + arr[i].slice(1, arr[i].length);  
//     }
//     const res = arr.join(" ");
//     console.log(res);
// }

// x("santosh singh from")



// 10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.

// const x = (str) => {
//     let res = ""
//     for(let char of str){
//         res+= char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()
//     }
//     console.log(res);
// }

// x("StrIng")




// 13. Write a JavaScript function to concatenates a given string n times (default is 1).

// const x = (str, num=1) => {
//     const res = str.repeat(num);
//     console.log(res);
// }

// x("hello", 10)



// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

// const x = (str, enter, pos=1) => {
//     const part1 = str.slice(0,pos);
//     const part2 = str.slice(pos,str.length);
//     const res = part1 + enter + " " + part2;
//     console.log(res);
// }

// x("we are doing some exercises", "javascript", 18)




// 17. Write a JavaScript function to chop a string into chunks of a given length.

// const x = (str, leng) => {
//     const arr = [];
//     for(let i=0; i<str.length; i+=leng){
//         arr.push(str.slice(i,i+leng))
//     }
//     console.log(arr);
// }

// x("santosh singh", 3)




// 18. Write a JavaScript function to count the occurrence of a substring in a string.

// const x = (str,para) => {
//     const det = [];
//     const arr = str.split(" ");
//     for(y of arr){
//         if(y.toLowerCase()===para){
//             det.push(y)
//         }
//     }
//     console.log(det.length);
// }

// x("The quick brown fox jumps over the lazy dog", 'the')





// 25. Write a JavaScript function to alphabetize a given string.

// const x = (str) => {
//     const res = str.split("").sort().join("")
//     console.log(res);
// }

// x('United States')





// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

// const x = (str, para) => {
//     const arr = str.split(" ");
//     const fin = [];
//     for(vari of arr){
//         if(vari===para){
//             continue
//         }else{
//             fin.push(vari)
//         }
//     }
//     const res = fin.join(" ");
//     console.log(res);
// }

// x("The quick brown fox jumps over the lazy dog", 'the')





// 29. Write a JavaScript function to find a word within a string.

// const x = (str, para) => {
//     let count =0;
//     const res = str.replace(",", "");
//     const arr = res.split(" ");
//     for(char of arr){
//         if(char===para){
//             count+= 1;
//         }else{
//             continue
//         }
//     }
//     console.log(count);
// }

// x('The quick brown fox', 'fox')
// x('aa, bb, cc, dd, aa', 'aa')



// 30. Write a JavaScript function check if a string ends with specified suffix.

// const x = (str,para) => {
//     return str.endsWith(para)
// }

// console.log(x('JS PHP PYTHON','PYTHON'))





// 34. Write a JavaScript function to convert a string to title case

// const x =(str)=>{
//     const arr = str.split(" ");
//     for(let i=0; i<arr.length; i++){
//         arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1,arr[i].length).toLowerCase();
//     };
//     console.log(arr.join(" "));
// }

// x('PHP exercises. python exercises.')





// 37. Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.

// const x = (atr, atr1) => {
//     let status = ""
//     for(let i=0; i<atr.length; i++){
//         if(atr[i] === atr1[i].toLowerCase() || atr[i] === atr1[i].toUpperCase()){
//             status=true;
//             continue
//         }else{
//             status=false;
//             break
//         }
//     };
//     console.log(status);
// }


// x("abcd", "aBcd")



// 38. Write a JavaScript function to create a case-insensitive search.
// const x = (str, para)=> {
//     let nreg = new RegExp(`${para}`, "ig")
//     const arr = str.match(nreg);
//     if(arr[0]){
//         console.log("matched");
//     }
// }

// x('JavaScript Exercises', 'exercises')






// 43. Write a JavaScript function to test whether the character at the provided (character) index is upper case

// const x = (str, pos) => {
//     const char = str.charAt(pos);
//     if(char === char.toUpperCase()){
//         console.log(true);
//     }else{
//         console.log(false);
//     }
// }

// x('Js STRING EXERCISES', 0)






// 49. Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.

// const x = (len=32) =>{
//     let guid = "";
//     const random = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
//     while(guid.length < len){
//         const index = Math.floor(Math.random()*random.length);
//         guid+= random[index]
//     };
//     console.log(guid);
// }

// x(15)
// x()