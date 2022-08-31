// Balance out the brackets using stack

// function run(str){
//     let obj={
//         "]": "[",
//         "}" : "{",
//         ")" : "("
//     };
//     const stack=[];
//     for(let x of str){
//         if(x==="{" || x==="[" || x==="("){
//             stack.push(x)
//             continue
//         }else{
//             if(stack[stack.length-1] === obj[x]){
//                 stack.pop(x)
//                 continue
//             }
//             else{
//                 console.log("The string is not balanced");
//                 break
//             }
//         }
//     }
//     if(stack.length===0){
//         console.log("The string is balanced");
//     }
// }


// run("[{({})}}]");
// run("{[()]}");












// Convert a given prefix expression into postfix notation using Stack.

// Input Description:
// The code should take a string of arbitrary length (prefix notation).

// Output Description:
// Print the corresponding postfix expression form.

// Sample Input :
// +24
// Sample Output :
// 24+



// function run(str){
//     const arr1 = [];
//     const arr2 = [];
//     for(let x of str){
//         if(x==="+" || x==="-" || x==="*" || x==="/"){
//             arr1.push(x)
//         }else{
//             arr2.push(x)
//         }
//     }
//     const str1 = arr1.join("");
//     const str2 = arr2.join("");
//     const res = str2 + str1;
//     console.log(res);
// }


// run("24+34+98")












// You are provided with a string ‘s’. Your task is to reverse the string using stack Data Structure.

// Input Description:
// You are given a string ‘s’.

// Output Description:
// Print the reverse string

// Sample Input :
// i am jsb
// Sample Output :
// jsb am i


// function run(str){
//     const arr = str.split(" ");
//     const res = []
//     for(let i=arr.length-1; i>=0; i--){
//         res.push(arr[i])
//     }
//     console.log(res.join(" "));
// }

// run("i am jsb")
















// A string containing the prefix expression is given to you.Evaluate it and print the single integer giving the answer.

// Input Description:
// You are given a string ‘s’.

// Output Description:
// Print the evaluated answer of that string

// Sample Input :
// -+235
// Sample Output :
// 0


// function run(str){
//     const res = [];
//     for(let i=str.length-1; i>=0; i--){
//         if(str[i]==="+" || str[i]==="-" || str[i]==="*" || str[i]==="/"){
//             let temp1 = Number(res.pop());
//             let temp2 = Number(res.pop());
//             switch (str[i]){
//                 case "+" : res.push(temp1+temp2); break;
//                 case "-" : res.push(temp1-temp2); break;
//                 case "*" : res.push(temp1*temp2); break;
//                 case "/" : res.push(temp1/temp2); break;
//             }
//         }else{
//             res.push(str[i])
//         }
//     }
//     console.log(res);
// }

// run("-+235")
















