const user={
    username:"Shashank",
    price:999,

    welcomeMessage:function()
    {
            console.log(`${this.username},welcome to website`);// this uses for current context;
           console.log(this);// it will give whole context when we call function
        }

}
//user.welcomeMessage// it will not give anythig
// user.welcomeMessage()// () is require for accesing function
// user.username="saurabh";
// user.welcomeMessage()// because this works on current context and current contxt mein shashank has changed to saurabh

//console.log(this);// it will give {} in node environment ,but i browser connsole it will not be {};
// in browser the global object is windows, hence "this" keyword will give intire context of global object windows

// function chai ()
// { 
//     const username="Shashank"
//     console.log(this.username)// it will give "undefined" that is this keyword does not apply for function ,it will only applicable for objects
// }
// chai();// "this" is inside the function inn node environment it will give lots of info about  global,fetch,....

// 2nd method of function 
// const chai=function()
// {
 
//     const username="Shashank"
//     console.log(this.username)   // by this method also it will be undefined only  no change
//     console.log(this);// it will give whole context
// }
// chai()

// Arrow function
// function is replaced by arrow
// const chai=()=>{
//     const username="Shashank"
//    // console.log(this.username)   // by this method also it will be undefined only  no change
//     console.log(this);// output is {} ,output is different for arrow function and normal function in this case.
// }
// chai()

//*****Arrow function******* */
//()=>{}
// const addtwo=(num1,num2)=>{
//     return num1+num2;// explicit return means we add return explicitly
// }


//const addtwo=(num1,num2)=> num1+num2// no need to  write return ,and this is implicit method hence no need of {}
// const addtwo=(num1,num2)=> (num1+num2)// {} mein add kra to return ,() no need to write return ,Do remember
// console.log(addtwo(3,6));

//*******object with => using implicitly behaviour*************

const print= ()=>{
  return   {username:"shasahnk"}// this parenthesis is required ,otherwise object will give only undefined
}
    console.log(print());// keep in mind inside console print() this  parenthesis is needed





