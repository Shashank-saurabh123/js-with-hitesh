// reduce method
// reduce js mdn 
const myNums=[1,2,3]



// const myTotal=myNums.reduce((acc,currVal)=>{
//     return acc+currVal
// },0)// 0 is the accumulator value at first time
// console.log(myTotal);

const myTotal=myNums.reduce((currVal,acc)=>(currVal+acc),0)// smarty code😎
console.log(myTotal);

//shoppingCart
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);




