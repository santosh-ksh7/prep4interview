// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"

// function run(){
//     for (let index = 1; index < 100; index++) {
//         if(index%3 ===0 && index%5===0){
//             console.log(`${index} FizzBuzz`);
//         }else if(index%3===0){
//             console.log(`${index} Fizz`);
//         }else if(index%5===0){
//             console.log(`${index} Buzz`);
//         }
//     }
// }

// run()



// 9. Write a JavaScript program to find the armstrong numbers of 3 digits

// function run(num){
//     let str = String(num);
//     let res=0;
//     for(x of str){
//         res+= Number(x)**3
//     }
//     if(num===res){
//         console.log(`${num} is Armstrong number`);
//     }else{
//         console.log(`${num} is not Armstrong number`);
//     }
// }


// run(222)
// run(371)







// 10. Write a JavaScript program to construct the following pattern, using a nested for loop

// *  
// * *  
// * * *  
// * * * *  
// * * * * * 


// function run(){
//     let chr ="*";
//     for(let i=1; i<6; i++){
//         for(let y=1; y<i; y++){
//             chr+="*"
//         }
//         console.log(chr);
//         chr="*"
//     }
// }

// run();