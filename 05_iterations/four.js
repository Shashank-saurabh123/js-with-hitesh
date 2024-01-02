const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:" swift by apple"
}
// forin loop mostly  works for objects
for (const key in myObject) {
   // console.log(key);// it will give key
    //console.log(myObject[key]);// now it will print values
    //console.log(`${key} shortcut is for${myObject[key]}`);
}
//forin loop in array
const programming=["js","rb","py","java","cpp"]
for (const key in programming) 
{
    //console.log(key);//it will print keys of array while forof will print complete values of key
  //  console.log(programming[key]);
}
// forin on MAP
const map=new Map()//map is itself an object in js ,go through with mdn docs
map.set('IN',"India")
map.set('USA',"United state of America");
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key);// this will not give any error it will simply ignore this,map is  not iteratable hence we can not use map in loops
}



