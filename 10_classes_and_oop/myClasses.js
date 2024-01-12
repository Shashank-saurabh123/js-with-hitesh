// ES6

// class User{
//     // jaise hi class se ek object initialise hoga(new keyword) constructur call will start 
//     constructor(username,email,password)
//     {
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword()
//     {
//         return `${this.password}abc`
//     }
//    changeUserName()
//    {
//     return `${this.username.toUpperCase()}`
//    }


// }

// const chai=new User("chai","chai@gmail.com","123")// actually mein chai ke andar User class ka hi object bn gya hai
// //console.log(typeof chai);// object
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// upar wala kaam in a different manner
// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());