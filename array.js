// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// const x =(arr, ind) => {
//     const res = arr.slice(arr.length-ind, arr.length)
//     console.log(res);
// }


// x([1,2,3,4,5], 2)



// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

// const x = (str) => {
//     const arr = str.split("")
//     let res = []
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] %2 ===0 && arr[i+1]%2===0){
//             res.push(arr[i], "-")
//         }else{
//             res.push(arr[i])
//         }
//     };
//     console.log(res.join(""));
// }


// x("025468")




// 7. Write a JavaScript program to sort the items of an array

// const a = (arr) => {
//     console.log(arr.sort());
// }

// a([3, 8, 7, 6, 5, -4, 3, 2, 1])




// 8. Write a JavaScript program to find the most frequent item of an array.

// const x = (arr) => {
//     let obj={};
//     for(let x of arr){
//         if(obj[x]){
//             obj[x] += 1
//         }else{
//             obj[x] = 1
//         }
//     };
//     let num=0, occurence=0;
//     for(let [x,y] of Object.entries(obj)){
//         if(y>occurence){
//             occurence=y;
//             num=x
//         }else{
//             continue
//         }
//     }
//     console.log(`${num} is repeated ${occurence} times`);
// }

// x([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])




// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// const x = (str) => {
//     const arr = str.split(" ");
//     let res =[]
//     for(let x of arr){
//         let hih = "";
//         for( let y of x){
//             hih+= y === y.toLowerCase() ? y.toUpperCase() : y.toLowerCase()
//         }
//         res.push(hih);
//     }
//     console.log(res.join(" "));
// }

// x(`The Quick Brown Fox`)




// 10. Write a JavaScript program which prints the elements of the following array

// const x = (arr) => {
//     for(let i=0; i<arr.length; i++){
//         console.log(`row ${i}`);
//         for(let z=0; z<arr[i].length; z++){
//             console.log(arr[i][z]);
//         }
//     }
// }

// x([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])




// 11. Write a JavaScript program to find the sum of squares of a numeric vector

// const x = (arr) => {
//     const res = arr.reduce((sum, ele) => sum+ele*ele, 0);
//     console.log(res);
// }

// x([0,1,2,3,4])




// 12. Write a JavaScript program to compute the sum and product of an array of integers

// const x =(arr) => {
//     const sum = arr.reduce((tot,ele) => tot+ele, 0)
//     const mul = arr.reduce((tot,ele) => tot*ele)
//     console.log(sum, mul);
// }


// x([1, 2, 3, 4, 5, 6])




// 14. Write a JavaScript program to remove duplicate items from an array

// const x = (arr) => {
//     const res=[];
//     for(y of arr){
//         if(res.includes(y)){
//             continue
//         }else{
//             res.push(y)
//         }
//     }
//     console.log(res);
// }

// x([1,2,3,4,5,1,2,3,6,7,8,9])






// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays

// const x = (arr1, arr2) => {
//     const res =[]
//     const leng = arr1.length > arr2.length ? arr1.length : arr2.length;
//     for(let i=0; i<leng; i++){
//         if(arr1[i] && arr2[i]){
//             res.push(arr1[i] + arr2[i])
//         }else if(!arr1[i]){
//             res.push(arr2[i])
//         }else{
//             res.push(arr1[i])
//         }
        
//     }
//     console.log(res);
// }

// x([1,0,2,3,4], [3,5,6,7,8,13])





// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

// const x =(arr) => {
//     const obj = {};
//     for(let x of arr){
//         if(obj[x]){
//             obj[x] += 1
//         }else{
//             obj[x] = 1
//         }
//     };
//     const res ={}
//     for(let [x,y] of Object.entries(obj)){
//         if(y>1){
//             res[x] = y
//         }else{
//             continue
//         }
//     }
//     console.log(res);
// }


// x([1,2,3,4,1,2,3,4,5,6,7,8,8,7])








// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level

// const x = (arr) => {
//     let flatArray = [];
//     arr.forEach((element) => {
//         if(typeof element !== "object"){
//             flatArray.push(element);
//         }else{
//             flatArray = flatArray.concat(x(element))
//         }
//     });
//     return flatArray;
// }

// console.log(x([1,2,[1,2,3,4],[5,6,7,[9,8,7]],9,0]));






// 22. Write a JavaScript program to compute the union of two arrays

// const x = (arr1, arr2) => {
//     const res =[];
//     for (let index = 0; index < arr1.length; index++) {
//         if(res.includes(arr1[index])){
//             continue
//         }else{
//             res.push(arr1[index])
//         } 
//     }
//     for (let index = 0; index < arr2.length; index++) {
//         if(res.includes(arr2[index])){
//             continue
//         }else{
//             res.push(arr2[index])
//         } 
//     }
//     console.log(res);
// }


// x([1, 2, 3], [100, 2, 1, 10])






// 23. Write a JavaScript function to find the difference of two arrays.

// const x = (arr1,arr2) => {
//     const diff=[]
//     for(let y of arr1){
//         if(arr2.includes(y)){
//             continue
//         }else{
//             diff.push(y)
//         }
//     };
//     for(let y of arr2){
//         if(arr1.includes(y)){
//             continue
//         }else{
//             diff.push(y)
//         }
//     }
//     console.log(diff);
// }

// x([1, 2, 3], [100, 2, 1, 10])





// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// const x =(arr) => {
//     for (let index = 0; index < arr.length; index++) {
//         if(arr[index]===NaN || arr[index]===null || arr[index]===false || arr[index]===0 || arr[index]===undefined || arr[index]===""){
//             arr.splice(index, 1)
//         }
//     };
//     console.log(arr);
// }

// x([NaN, 0, 15, false, -22, '',undefined, 47, null])





// 25. Write a JavaScript function to sort the following array of objects by title value

// const x =(arr) => {
//     const res = arr.sort((a,b)=> {
//         if(a.title < b.title){
//             return -1
//         };
//         if(a.title > b.title){
//             return 1
//         };
//         if(a.title == b.title){
//             return 0
//         }
//     })
//     console.log(res);
// }

// x([ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ])






// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

// const x =(arr, target) => {
//     const pair =[]
//     for (let index = 0; index < arr.length; index++) {
//         for (let index2 = index+1; index2 < arr.length; index2++) {
//             if(arr[index] + arr[index2] === target){
//                 pair.push([index, index2])
//             }else{
//                 continue
//             }
//         }
//     }
//     console.log(pair);
// }


// x([10,20,10,40,50,60,70], 50)




// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds

// const x = (start, end, gap) => {
//     const res =[];
//     const begin = start.charCodeAt();
//     const stop = end.charCodeAt();
//     for (let code = begin; code <= stop; code+=gap) {
//         res.push(String.fromCharCode(code))
//     }
//     console.log(res);
// }

// x("a", "z", 2)








// 31. Write a JavaScript function to remove a specific element from an array.

// function run(arr, rem){
//     for(let x in arr){
//         if(arr[x]===rem){
//             arr.splice(x,1)
//         }else{
//             continue
//         }
//     }
//     console.log(arr);
// }

// run([2,5,8,6], 5)







// 34. Write a JavaScript function to get nth largest element from an unsorted array.

// function run(arr, which){
//     const res = arr.sort((a,b) => a-b);
//     console.log(arr[arr.length - which]);
// }

// run([ 43, 56, 23, 89, 88, 90, 99, 652], 4)





// 38. Write a JavaScript function to move an array element from one position to another

// function run(array, pos1, pos2){
//     let first = array[pos1];
//     let second = array[pos2];
//     array[pos2] = first;
//     array[pos1] = second;
//     console.log(array);
// }


// run([10, 20, 30, 40, 50], 0, 2)





// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array.

// function run(arr){
//     const rse = arr.filter((ele) => ele!== null && ele!== false && ele!== 0 && ele!== "")
//     console.log(rse);
// }


// run([58, '', 'abcd', true, null, false, 0])






