const myArr=[0,1,2,3,4,5];
const myHeros=["Shaktiman","Sahshank","Saurabh"]
const myArr2= new Array(1,2,3,4)// another way of declaring ,() is used instead of []  here.
//console.log(myArr[4])

// Array methods
// myArr.push(6);
// console.log(myArr);
// //pop
// myArr.pop();
// console.log(myArr)

//shif/Unshift
// myArr.unshift(8)// 8 will come at begining
// console.log(myArr)
// myArr.shift()// no argument here, it will remove from starting side 
// console.log(myArr)

//**Askinng question type method */
//console.log(myArr.includes(7))// askinng that 7 is present or not?
// answer will be boolean type true/false
//console.log(myArr.indexOf(7)) // -1 because 7 is not  available in myArr

//**join()--> to make array in to string */
// const newArr= myArr.join();//  0,1,2,3,4,5
// console.log(typeof myArr);// typeof is object
// console.log(typeof newArr);//typeof is string

// slice ,splice
//**MOST IMPORTANT FOR INTERVIEW */
console.log("A" ,myArr);
const myn1= myArr.slice(1,3);// range not included and does not effect the original array
console.log(myn1);// [ 1, 2 ]

console.log("B" ,myArr);// B [ 0, 1, 2, 3, 4, 5 ]
const myn2=myArr.splice(1,3);// range include and remove the spliced elements from the array
console.log(myn2);// [ 1, 2, 3 ]
console.log(myArr);// [ 0, 4, 5 ]





