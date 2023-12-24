 //Dates

 let myDate= new Date();// new keyword used to introduce date
//  console.log(myDate.toString());// output=>Sat Dec 23 2023 13:02:56 GMT+0000 (Coordinated Universal Time)
//  console.log(myDate.toDateString()) // Sat Dec 23 2023
//  console.log(myDate.toLocaleDateString())// 12/23/2023
 //console.log(myDate.toISOString()) //2023-12-23T13:06:40.478Z
 //console.log(myDate.toJSON())//2023-12-23T13:14:32.298Z (same as ISOString())
 
 // typeof myDate is object type (interview question)
 //console.log(typeof myDate);// 

 //let myCreatedDate=new Date(2023,0,3,5,3);
//console.log( myCreatedDate.toString())// tue Jan 03 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
// month start with 0 in js (0->january)
// day start with 1 (1->monday)
//console.log( myCreatedDate.toDateString())//Tue Jan 03 2023
//for time and date
//console.log( myCreatedDate.toLocaleString()) //1/3/2023, 5:03:00 AM (on introducing time)

let myCreatedDate=new Date("01-14-2023");// when month is in this "" ==>01->january (months start with jan)
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()// it will give time value in milisecond from 1st jan 1970 to till now
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());// time in milisecond from 1st jan 1970 to 01/14/2023
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate.getMonth()+1);// start with 0
// console.log(newDate.getDay())// sunday treat as 0

// Very Important feature it has lots of properties
newDate.toLocaleString('default',{
    weekday:"long",
}) // ctrl+ space will allow lots of options here




