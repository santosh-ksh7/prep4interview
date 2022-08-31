// const arr = [
//     {name: "name1"},
//     {name: "name2"},
//     {name: "name3"},
//     {name: "name4"}
// ]

// const res = arr.map((ele) => ele.name);
// console.log(res);




// // case-1
// var x;
// console.log(x);                      // op - undefined
// x=23;


// // case-2
// x = 30;
// console.log(x);                      // op - 30
// var x;


// // case-3
// var x =0;
// var y= 4;
// if(x){
//     console.log(x);
// }
// if(y){
//     console.log(y);                         // op 4
// }


// // case-4
// for(let i=0; i<10; i++){
//     setTimeout(() => {
//         console.log(`The number is ${i}`);
//     });
// }
// // op - 0,1,2,3,4,5,6,7,8,9
// // when using the var instad of let the op will be 10, 10 times



// // case-5
// let a =10;
// var a = 10;
// console.log(a);                 // error








// random

// console.log(x);
// const x = 10;


// function run(){
//     setTimeout(() => {
//         console.log(i);
//     }, 2000);
//     var i =10;
// }

// run()



// function run(){
//     for(var i=0; i<3; i++){
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//     }
// }

// run()



// promise chaining for dependant operations

// function run(value){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2*value)
//         }, 5000);
//     })
// }

// function run1(value){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("I m rejected")
//         }, 5000);
//     })
// }


// run(2).then((value) => {
//     console.log(value);
//     return run(value)
// }).then((value1) => {
//     console.log(value1);
//     return run(value1)
// }).then((value2) => {
//     console.log(value2);
//     return run1(value2)
// }).then((value3) => {
//     console.log(value3);
//     return run(value3)
// })





// promise.all([]) for all independent promises

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("This is promise p1 getting fulfilled")
//     },2000)
// })



// let p2 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("This is promise p2 getting fulfilled")
//     },2000)
// })


// let p3 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         reject("This is promise p3 getting rejected")
//     },2000)
// })



// const res = Promise.all([p1, p2]).then((data) => console.log(data)).catch((err)=> console.log(err));

// const res1 = Promise.all([p1, p2, p3]).then((data) => console.log(data)).catch((err)=> console.log(err));

// const res3 = Promise.allSettled([p1, p2, p3]).then((data) => console.log(data)).catch((err)=> console.log(err));