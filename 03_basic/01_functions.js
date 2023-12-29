function sayMyName()
{
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
}
//sayMyName()// function call same as in c++
sayMyName// this will not give anything ,it's just a reference, we have to add parenthesis for execution

function addTwoNumbers(number1,number2)
{
 console.log(number1+number2);
}
//addTwoNumbers()// this will give NaN because we are not passing any argument on which it will perform its task
//addTwoNumbers(4,"9")//49
//const result =addTwoNumbers(3,5)
//console.log("result is", result);// output ---> result is undefined
// for getting the result function should be return type ,console.log is not returning the function value it is just printing the sum



function addTwoNumbers(number1,number2)
{
 return number1+number2;
}
const result =addTwoNumbers(3,5)// now this will store result because now function is return type
//console.log("result is", result);

function loginUserMessage(username="sam")// sam is by default ,if you are not passing argument then it will g
{
    if(!username)// incase of checking that username is not undefined {in js undefined treat as false} !false = true , then only this condition will hit
   {
   console.log("please enter a userName") 
   return;
   }
   return`${username} just logged in`;// string intrapolation 
}

//console.log(loginUserMessage("sahshank"));// here without console.log nothing will print because function has returned the value ,so someone needs to be there to print their returned value
//console.log(loginUserMessage())//output is--> "undefined" (not NULL) just logged in"// <<important for interview 

function calculateCartPrice(val1,val2,...num1)// ""..." is a rest/ spread operator ,it will take all arguments and put them in to an array
{
  return num1;// now num1 will  store [2,321] important question
}
console.log(calculateCartPrice(200,1,2,321));


// passing object inside the function
// Method 1
const user={
    username:"Shashank",
    price:999
}

function handleObject(anyObject)
{
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);

//Method2// this will also work
handleObject({
    username:"Shashank",
    price:199
})

const myNewArray=[200,311,32,212];
function returnSecondValue(getArray)
{
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,311,32,212]));// both wil work fine
