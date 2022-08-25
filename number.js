// 36. Write a JavaScript function which will return values that are powers of two.

// function run(num){
//     let res = 0;
//     let pow=0;
//     let status = false
//     while(num>pow){
//         pow = Math.pow(2,res);
//         res++;
//         if(pow===num){
//             pow=num;
//             status = true
//         }else{
//             status=false;
//         }
//     }
//     console.log(status);
// }

// run(94)





// 43. Generate the prime numbers upto a certain range

// function run(range){
//     const res=[2];
//     let status = false;
//     let num = 3;
//     while(num<=range){
//         for(let i=2; i<num; i++){
//             if(num%i===0){
//                 status=false;
//                 break;
//             }else{
//                 status=true;
//                 continue;
//             }
//         }
//         if(status===true){
//             res.push(num);
//             num++
//             continue
//         }else{
//             num++;
//             continue
//         }
//     }
//     console.log(res);
// }


// run(15)