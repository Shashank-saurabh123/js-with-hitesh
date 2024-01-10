// promises are object


const promiseOne= new Promise(function(resolve,reject){
    // Do an async task
    // DB task, cryptoGraphy,networkCall
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()// this method will connect the resolve with .then
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve();
    },1000)
}).then(function(){
    console.log("Async two resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username :"chai",email:"chai@exmaple.com"})
    })
},1000)
// whatever the data we are getting we can consume them via .then
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Shashank", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// callback hell or chainings
// we want to  take return values

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then((username)=>{
 console.log(username);
}).catch((error)=>{
 console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})


const prommiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
// be carefull with function syntax here
// async await directlly don't handle errors
// for error handling we use try and catch
async function consumePromiseFive(){
 try {
    const response=await prommiseFive
    console.log(response);
 } catch (error) {
    console.log(error);
 }
}

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()// need to make into json fromm string and this (response.json()) also takes time hecne we have put async here now this will work
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))





















consumePromiseFive();














