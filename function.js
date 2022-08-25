// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

// function run(number){
//     let status = false;
//     let num=2;
//     while(num<number){
//         if(number%num === 0){
//             status = false;
//             num++
//             break
//         }else{
//             status = true;
//             num++
//             continue
//         }
//     }
//     if(status===true){
//         console.log(`${number} is prime`);
//     }else{
//         console.log(`${number} is not prime`);
//     }
// }

// run(5)





// 19. Write a JavaScript function that returns array elements larger than a number.

// function run(arr, num){
//     const res = arr.filter((ele) => ele>num);
//     console.log(res);
// }


// run([1,2,3,4,5], 2)






// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string

// function run(str, letter){
//     const se = new RegExp(letter, "ig")
//     const fin = str.match(se);
//     console.log(fin.length);
// }

// run('w3resource.com', 'o')





// 23. Write a JavaScript function to find the first not repeated character.

// function run(str){
//     for(let x of str){
//         const se = new RegExp(x, "ig");
//         const res = str.match(se);
//         if(res.length===1){
//             console.log(x);
//             break
//         }else{
//             continue
//         }
//     }
// }


// run("abacddbec")





