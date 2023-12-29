(function chai() // named iife
{
    console.log(`DB CONNECTED`);
}
//chai();
)();// ; is required here otherwise it will not know where to stop ,hence in this case next function will not execute and next function will throw error
// (function)(works as function call)---> this will work
//iife ,it avoids the pollution of global scope and it also execute functions immidieatly
//(def)(func call)

((name)=>{
 console.log(`DB CONNECTED TWO ${name}`);
})("Shashank");//treat it as a function call  only

