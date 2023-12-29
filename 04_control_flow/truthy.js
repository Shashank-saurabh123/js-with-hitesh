//const userEmail="saurabh123super@gmail.com";//if () will execute
//const userEmail={}//if()will execute
const userEmail=[]// if() will execute

if(userEmail)
{
    console.log("Got user emai");
}
else
{
    console.log("Don't have user emai");
}

// falsy values

//false,0,-0,BigInt 0n,null,undefined,"",NaN // (except these almost all are truthy)

//truthy value(surprising)
//"0",'false'," ",[],{},function(){}


//array and object check

// if(userEmail.length===0)
// {
//     console.log("Array is empty");
// }

const emptyObject={}
if(Object.keys(emptyObject).length===0)// checking the objects are empty or not
{
    console.log("Object is empty");
}


//Nullish Coalescing Operator(??): null undefined (to be safe from null and undefined)
 let val1;
 val1=5 ?? 10;// 5
 val1=null ?? 5// 5
 val1=undefined??5//5
val1=null??10??20//10
console.log(val1);

///********ternary operator ****/
//condition ? true: false

const iceTeaPrice=100;
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");







