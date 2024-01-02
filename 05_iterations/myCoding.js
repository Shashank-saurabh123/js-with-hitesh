// Objects inside loop

const myCoding=[
    {
        languageName:"javascript",
        lanuagefileName:"js"
    },
    {
        languageName:"java",
        lanuagefileName:"java"
    },
    {
        languageName:"python",
        lanuagefileName:"py"
    },
]

myCoding.forEach((item)=>{
 console.log(item.languageName);// here object is pointing to all objects inside the array
})
