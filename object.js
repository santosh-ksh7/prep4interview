// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

// function run(arr){
//     for(x of arr){
//         console.log(x.readingStatus);
//     }
// }

// run([ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }])








// 6. Write a Bubble Sort algorithm in JavaScript.

// function run(array){
//     for (let index = 0; index < array.length; index++) {
//        for (let index1 = index+1; index1 < array.length; index1++) {
//             if(array[index] > array[index1]){
//                 let lar = array[index];
//                 let sma = array[index1];
//                 array[index] = sma;
//                 array[index1] =lar;
//                 continue
//             }else{
//                 continue
//             }
//        }
//        continue
//     }
//     console.log(array);
// }

// run([6,4,0, 3,-2,1])






// 8. Write a JavaScript program to create a Clock.

// function run(){
//     setInterval(() => {
//         let newdate = new Date();
//         console.log(`${newdate.getHours()}:${newdate.getMinutes()}:${newdate.getSeconds()}`);
//     }, 1000);
// }

// run()





// 15. Write a JavaScript function to convert an object into a list of '[key, value]' pairs.

// function run(obj){
//     const res = [];
//     for(x of Object.keys(obj)){
//         res.push([x, obj[x]])
//     }
//     console.log(res);
// }


// run({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})



// 16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// function run(obj){
//     const res = {};
//     for(x of Object.keys(obj)){
//         res[obj[x]] = x
//     }
//     console.log(res);
// }

// run({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})