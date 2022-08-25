// Find the maximun consecutive ones?

// function run(arr){
//     let curr = 1;
//     let max = 0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 curr += 1
//                 continue;
//             }else{
//                 break
//             }
//         }
//         if(curr > max){
//             max= curr;
//             curr=1;
//             continue
//         }else{
//             curr=1;
//             continue;
//         }
//     }
//     console.log(max);
// }


// run([1,1,0,1,1,1,1,0,0,1,1,1,1,1])






// Find the numbers in an array that have even numbers of digits?

// function run(arr){
//     const res =[]
//     for(x of arr){
//         let num=x;
//         let count = 0;
//         while(num > 0){
//             num = parseInt(num/10);
//             count+= 1;
//         }
//         if(count%2===0){
//             res.push(x)
//         }
//     }
//     console.log(res);
// }


// run([15,11,654,4656])










// Merger 2 sorted arrays without using the sort method on array?

// function run(arr1, arr2){
//     const res = []
//     let ptr1=0, ptr2=0;
//     while(ptr1<arr1.length && ptr2<arr2.length){
//         if(arr1[ptr1] < arr2[ptr2]){
//             res.push(arr1[ptr1]);
//             ptr1++;
//         }else{
//             res.push(arr2[ptr2]);
//             ptr2++;
//         }
//     }
//     while(ptr1< arr1.length){
//         res.push(arr1[ptr1]);
//         ptr1++
//     }
//     while(ptr2< arr2.length){
//         res.push(arr2[ptr2]);
//         ptr2++
//     }
//     console.log(res);
// }

// run([1,3,5,6], [2,4,7,8,9])