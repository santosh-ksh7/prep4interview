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