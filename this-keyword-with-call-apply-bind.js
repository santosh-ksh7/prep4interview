// destructure objects within objects

// const obj = {
//     name: "santosh",
//     address: {
//         street: "72",
//         colony: "sonari"
//     }
// }

// const{address: {colony}} = obj;

// console.log(colony);






// objects cant be compared coz both point to different memory address

// console.log({name: "santosh"} == {name: "santosh"});
// console.log({name: "santosh"} === {name: "santosh"});
















// random question to referencing objects

// CASE-1

// let person = {
//     name: "santosh"
// };

// const arr = [person];

// person = null;

// console.log(arr);




// CASE-2

// let person = {
//     name: "santosh"
// };

// const arr = [person];

// person.name = null;

// console.log(arr);












// this keyword in objects
// only variables defined with the var keyword are made available to the window object

// var name = "santosh global";
// var age = 20000;

// let person = {
//     name: "santosh",
//     age: 24,
//     details_arrow: () => {console.log(`${this.name} is of age ${this.age}`)},
//     details_normal: function (){
//         console.log(`${this.name} is of age ${this.age}`)
//     }
// }

// person.details_arrow();     // if the variables weren't declared with var keyword, this would have refereed to undefined.
// person.details_normal();













// call, apply & bind           ----         To couple a function with an object

// const person = {
//     fname: "santosh",
//     lname: "singh"
// }

// const msg = function (state, country){
//     console.log( `${this.fname} ${this.lname} is from ${state}, ${country}`);
// }

// case-1 ----- CALL is used to invoke the function & pass the context & arguements. 1st arguement is context, then rest are arguements to func.

// msg.call(person, "Jharkhand", "India");





// case-2 ----- APPLY is used to invoke the function & pass the context & arguements. 1st arguement is context, then rest are arguements to func. passed as an array

// msg.apply(person, ["Jharkhand", "India"]);




// case - 3  ----- BIND is used to return a new function. This new function is binded to it's context. To this new function we pass the arguements normally as we do.

// const new_func = msg.bind(person);                               // Only needs the context to bind the function with context
// new_func("Jharkhand", "India")                                   // We pass arguements as we do normally