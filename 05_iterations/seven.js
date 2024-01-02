const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// task is add to add 10 in all

//const newNums=myNumbers.map( (num)=>{return num+10})// when you open the scope here it will give undefined rather than empty array
//console.log(newNums);

//chaining
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);