// on the basis of memory and value allocations there will be two type of datatype

// primitivie Datatype
// 7 types-->String,Number,Boolean,null,undefined,symbol,BigInt

//Js is statically typed or Dynamically typed language ?
// I think it is Dynamically because, while declaring datatype is not required
const score="33"// string 
const scoreValue=100.3// number
const isLoggedIn=false// boolean
const outSideTemp=null// datatype is object
let userEmail// undefined
const bigNumber=121232436568523312n // add small 'n' in last
//console.log(typeof bigNumber);
//Symbol(used for uniqueness)
let id=Symbol('123');// datatype is Symbol
let anotherId = Symbol('123');// datatype is Symbol
//console.log(id===anotherId);// false


// Reference type (non primitive)
// Array, Objects,Functions
// All non primitive datatypes are of object datatypes

const heros=["Shaktiman","naagraj","doga"];// datatype is object
let myObj={// (datatype object)
    name:"Shashank",
    age:21,
    college:"NITW",
}
//Function

const myFunction = function(){ // (function object)
    console.log("Hellow world")
}
console.log( typeof (myObj)) // output is :object 

//******************that's it************************