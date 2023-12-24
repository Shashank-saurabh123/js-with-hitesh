const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros =["superman","flash","batman"];
//marvel_heros.push(dc_heros);
// console.log(marvel_heros);// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// // it shows array inside array ,that means array can hold any time of data inside it in javascript
// console.log(marvel_heros[3][1]);  // output is thor

// marvel_heros.concat(dc_heros);
// const all_heros=marvel_heros.concat(dc_heros);// concat will work on new aaray
// console.log(marvel_heros);
// console.log(all_heros);


//**spread operator */ glass wala example
const all_new_heros= [...marvel_heros,...dc_heros];// this ... means they  are making the elements individually
//console.log(all_new_heros);// work same as concat more used in industries

const another_array=[1, 2, 3 ,[4, 5, 6], 7, [6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity)// by default use infinity, it spreads all sub array into  elements ,it works recusively 
//console.log(real_another_array);// hover on flat and study while revising

// console.log(Array.isArray("Shashank"));// asking question that, is Sahshank an array
// console.log(Array.from("Shashank"));// converting "shashank "string to array
//console.log(Array.from({name:"Shashank"}));// it wil give [], because it does not from where it has to make array wheather from index or from values

//** we can use of also instead of from */

let score1=100;
let score2=200;
let score3 =300;
console.log(Array.of(score1,score2,score3));// converts all individual variables in to the array

// #IMPORTANT
// isarray(),from,of
//that's it :)












