// foreach loop mainly for the arrays


const coding=["js","ruby","java","python","cpp"]
// arrayname.forEach(function (variable goes through the array){body})// callaback function does not hold name of the functions
//coding.forEach( function (item){
// coding.forEach( (item)=>{ // using arrow fnction
// console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)// that's it give only reference don't try to print it because printMe function is working as a callbacks funnction

// forEach holds other informations as well

coding.forEach( function(item,index,arr){// 3 variables one is iterator,second is indexof array and third one is whole arraylist
    console.log(item,index,arr);
})








