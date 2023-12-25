// Singleton


// object.create()--> constructor method (it is a Singleton)

// object literals
const mySymb=Symbol("key1");// very important for innterview

const jsUser={
    name:"SHashank",
    [mySymb]:"myKey1",// just a syntax
    "full name": "Shashank Saurabh",// " initialisation is also a string"
   "age":19 , // this also works
    location:"Bihar",
    email:"shashank@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturdays"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);// this will also work "" -->keep in mind while using, this is very useful in case of spaced 
// console.log(jsUser["full name"]);// for this type of initialisation only [" "] is possible
// console.log(jsUser.age);
// console.log(jsUser["age"]);

// symbol datatype
//console.log(jsUser.mySymb)//  here Symbol will work as a string its datataype will be string not symbol
//console.log( jsUser[mySymb]);// this is for Symbol datatype , do remember "" is not here
// Object.freeze(jsUser);// it will freeze or make it constant to jsuser
// jsUser.email="saurabh123@gmail.com";
// console.log(jsUser.email);

// console.log(jsUser);

 jsUser.greeting= function()
{
console.log("hello js users");
}
//console.log(jsUser.greeting)// function is not executed only refrence of function has been came out
//console.log(jsUser.greeting())// it will print 

jsUser.greeting2=function()
{
    console.log(`hello js users,${this.name}`);// `` called string intrapolation and we ${ this to acces variables of same object}
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())// hello js users,SHashank




