//function annonymous
// const parent =(n)=>{
//     const num=n
//     return function(num)
//     {
//         return num
//     }
// }
// console.log(parent(10));

 let a={
    greet:"ola"
}
let b=a;
a.greet="hello";
console.log(b.greet);
a={
    greet:"Namaste"
}
console.log(b.greet);
//Expalnation
// let a = { greet: "ola" }: This creates an object a with a property greet set to the value "ola".

// let b = a;: This assigns the reference of object a to b. Both a and b now point to the same object in memory.

// a.greet = "hello";: This changes the value of the greet property in the object referred to by a to "hello".

// console.log(b.greet);: This logs the value of the greet property of the object referred to by b. Since b refers to the same object as a, the output will be "hello". This is because both a and b reference the same object in memory, so modifying the object through one reference affects the other.

// a = { greet: "Namaste" }: This creates a new object and assigns it to the variable a. Now, a points to a different object in memory.

// console.log(b.greet);: This logs the value of the greet property of the object referred to by b. Since b still references the original object (which was modified to have greet as "hello"), the output will still be "hello". The reassignment of a doesn't affect the reference held by b.
// So, the final output will be:

// Copy code
// hello
// hello