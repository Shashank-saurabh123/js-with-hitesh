class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{// extends means user inheritate inside Teacher
    constructor(username, email, password){
        super(username)// previous video ki this wali story it does by super key,now username is  accesible her also
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
const masalaChai = new User("masalaChai")
//masalaChai.addCourse()// throw err,masalaChai doesn't have acces of addCourse
masalaChai.logMe()// yes it will execute
chai.logMe()// yea,chai has also acces to logMe because it has inherrited the User class

console.log(chai===masalaChai);//false
console.log(chai===Teacher);// false, because chaui has come with instace of Teacher class but it is not exactly equal to Teacher
console.log(chai instanceof Teacher);// true
console.log(chai instanceof User);//true (because instance fir uska instance)


