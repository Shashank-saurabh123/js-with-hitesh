function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)// without call keyword refernce goes to upar wala function but again couldn;t come to
    //SetUsername,and also you have to paas this keyword because SetUserName ka this jaise hie execute hoyega wo execution context 
    //se gayab ho jayega and we need to hold its reference there ,isilye createUser ka this paas hoga aur ab 
    // SetUsername ka sara details createUse ke paas aa jayega
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);