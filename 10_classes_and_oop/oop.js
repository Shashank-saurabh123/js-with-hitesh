const user={
    username:"Shashank",
    loginCount:8,
    signedIn:true,

    getuserDetails:function(){
   // console.log("got user details from database");
   //console.log(`Username:${this.username}`);// this keyword ensures that we are talking about this context
    console.log(this);   // it will  give all info of memory
}
}
// console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this);// it will give {} that mean nothing is there in global context
// but if we do (console.log(this);) in browser console it will give window ,because lots of global context are there in browser like fetch,DOM,....

// why constructors?
// because if we want to make user2 class again we have to make from scratch so to make it simple we use constructors


//const promiseOne= new Promise()// here new keyword refers to a connstructor function,whenever we call this new it creates new context

function User(username,loginCount,isLoggedIn)
{
    this.username=username;// left side is a variable while right side is cominng from parameter
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    //return this // no need to write return this,it implicitaly by defalut already return
}
const userOne=new User("Shashank",12,true);// if we will not use new key word it userOne will be overwritted by userTwo
const userTwo=new User("Saurabh",11,false);

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);// [Function: User] it is giving the details of user 


// read about (instanceOf) keyword in js


















