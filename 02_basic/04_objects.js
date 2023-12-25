// ibjects with constructurs

const tinderUser=new Object();// it is also a empty object,it is a singletone object
const tinderUser2={};// this will work as a empty object, it's not a singletone object

// console.log(tinderUser);//{}
// console.log(tinderUser2);//{}

tinderUser.id="123abd";
tinderUser.name="Shashank";
tinderUser.isloggedIn=false;
//console.log(tinderUser);

//**objects inside objects */
const regularUser={
    email:"saurabh123@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Shashank",
            lastname: "saurabh"
        }
    }
}
//console.log(regularUser.fullname?.userFullname.firstname);// ? this is for saftey purpose ,if they will exist then only they will work

// object combine
const obj1={1:"a",2:"b"};
const obj2={1:"a",2:"b"};
const obj4={4:"a",6:"b"};
//const obj3={obj1,obj2};// object ke andar object wali problem ,proper spreading is not there

//const obj3=Object.assign({},obj1,obj2,obj4)// without {} also it will work,if {} is not there then changes are happening inside obj1 only
const obj3={...obj1,...obj1,...obj4}
//console.log(obj3);

// Array of objects

const users=[
    {
        id:1,
        email:"saurabh2gmail.com"
    },
    {

    }
]
console.log(users[0].email);

// console.log(Object.keys(tinderUser));// all keys of tinderuser will be output in arrray container
// console.log(Object.values(tinderUser))//all values of tinderuser will be output in arrray container
// console.log(Object.entries(tinderUser))// array inside array holding their key and value pair

// for checking
// console.log(tinderUser.hasOwnProperty('isloggedIn'));// true 
// console.log(tinderUser.hasOwnProperty('islogged'));//false


//**object destructuring */
const course={
    coursename:"chai and js",
    price:"free",
    courseInstructotr:"Hitesh"
}

//course.courseInstructotr
const {courseInstructotr}=course
console.log(courseInstructotr);// no need to write course.courseInstructotr
// if courseInstructotr is too big we can assign it to a smaller string
const {courseInstructotr:instructur} =course;
console.log(instructur);// same as this  console.log(courseInstructotr)

//JSON format
{
   " coursename"":"chai and js",
   " price":"free",
    "courseInstructotr":"Hitesh"

}
// json is also a kind of object and in the form of arrays where key and values all are string
// [
//     {},
//     {
    
//     },
//     {}
// ]
// json format can be like this array also












