// let a=10;
// const b=20;
// var c=30;
let a=300;// global scope
var c=300;
if(true)
{
    let a=10;
    const b=20;
    //var c=30;
    c=30; 
    //console.log("INeer:", a);
}
//console.log(a);
//console.log(b);
//console.log(c);// it will give 30 ,but it shouldn't .that C variable inside the scope is also accesible outside the scope also.
// this is giving 30 not 300 ,hence suggested to avoid var

// basic closure : child function can acces parent function that is called as closure
function one()
{
    const username="Shashank";

    function two()
    {
        const website="youtube";
        console.log(username);
    }
   // console.log(website);// it gives error
    two();
}
//one ();// function call

if(true)
{
    const userName="Shashank"
    if(userName==="Shashank")
    {
        const website="youutube";
        console.log(userName + website);
    }
   // console.log(website);// 1st error
}
 //console.log(userName);// 2nd error

//**************** Intresting ******************** */
//type 1-->in this we can acces before declearation,it will work fine 
addone(5);
function addone(num)//it works because only function declaration is there 
{
 return num+1;
}




//type2 -->in this we can not acces before declearation
//addTwo(5);// this type will throw error
const addTwo=function(num)// shows error because while initialising it we are holding the function value as well
{
    return num+2;
}


