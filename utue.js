// recursive function

// write a function which keeeps on calculating the sum of its digit until the digit is a single digit
// 12345 => 15 => 6 is the op

// function run(num){
//     let str = String(num);
//     if(str.length === 1){
//         return Number(str)
//     }else{
//         let num_fin=0;
//         for(x of str){
//             num_fin+= Number(x)
//         };
//         return run(num_fin)
//     }
// }

// console.log(run(12345))





// write a dunction to flatten the array
// [1,2,3,[1,2,3,[2,3,[4,5]]], 5,6, [7,8], [9,0,[0,9,8]]] => [1,2,3,1,2,3,2,3,4,5, 5,6, 7,8, 9,0,0,9,8] should be desired output


// function flatten(arr) {
//     let flatArray = [];
//     arr.forEach((element) => {
//         if(typeof element !== "object"){
//             flatArray.push(element);
//         }else{
//             flatArray = flatArray.concat(flatten(element))
//         }
//     });
//     return flatArray;
// }


// console.log(flatten([1,2,3,[1,2,3,[2,3,[4,5]]], 5,6, [7,8], [9,0,[0,9,8]]]))











// function currying
// mul(1)(2)(3)(4)(5)   ===> 120 is the op

// function mul(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return function (e){
//                     console.log(`${a*b*c*d*e}`);
//                 }
//             }
//         }
//     }
// }


// mul(1)(2)(3)(4)(5)