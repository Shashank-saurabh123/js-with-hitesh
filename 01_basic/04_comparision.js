// console.log(2>1)
// console.log(2>=1)
// console.log(2!=1)

// console.log("2">1)// applicable
// console.log("02">1);// applicable {in both cases js automatically change string to number and then compare it } this is not a good habbit
// console.log(null>0);// output is false  {here null changes to NaN}
// console.log(null==0);// output is false {here null changes to NaN} 
// console.log(null>=0);// output is true {here null changes to zero}

// console.log(undefined>0)  // output is false
// console.log(undefined==0) // output is false
// console.log(undefined<0) // output is false

//strictly check 
console.log("2"===2) // output is false because it compare and check datatypes also.
