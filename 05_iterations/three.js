// for of loop
// Arrays specific loop

//[{},{},{}]

// const arr=[1,2,3,4,5];
// for(const num of arr)
// {
//     console.log(num);
// }
const greetings="Hello World"
for (const greet of greetings) {
 //console.log(`Each char is ${greet}`);   
}

// Maps-->works like key value pair

const map=new Map()//map is itself an object in js ,go through with mdn docs
map.set('IN',"India")
map.set('USA',"United state of America");
map.set('Fr',"France")
map.set('IN',"India")
// map stores unique key value pair and in the same oreder in which it has inserted
//console.log(map)

// loop on map
// for (const key of map) {
//     console.log(key);// it will print all key and value in array ,for single and value we have to destructure it
// }

// for (const [key] of map) {
//     console.log(key);
// }// it will give key

// for (const [x,num] of map) {
//     console.log(x ,' :' ,num);
// }


// this will not work for object it only works onn MAP
// const myObject={
//     'game1':'NFS',
//      'game2':'spiderman'
// }
// for (const [key,value] of myObject) {
    
//     console.log(key,':-',value);
// }






