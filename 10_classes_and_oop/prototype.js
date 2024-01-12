

//2nd time revision with some commments

// let myName ="Shashank      "
// //console.log(myName.length);// it will count the extra spaces also inn myName length
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// now we want to add hitesh method in prototype 
//but this time directlly we will inject it into object only

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
// now hitesh function or object has already come in prototype (here idea is ,we directlly go to senior most parent and made changes)
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()// now heroPower object is having power to operate with .hitesh()
// myHeros.hitesh()// since arrays also goes via Object only they also have that power to acces .hitesh()
// myHeros.heyHitesh()// now we are injecting inside the array so array will have that acces but its main object does not have
// heroPower.heyHitesh()// no you can't acces ,it will throw error
//parent --> child (accesible in both)
//child-->parent (accesible only in child)




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport// TAsupport object is now able to acces the all propeties of TeachingSupport
}

Teacher.__proto__ = User//Teacher object is accesing proprties of all User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)// first argument is accesing the all properties of 2nd argument


// solving our first main problem
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);// output is --> ChaiAurCode when anotherUsername is calling do some execution you will get to know things
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()








