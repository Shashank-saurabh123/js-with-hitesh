// Can you overwrite Math.PI?
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
//console.log(chai);
// now we are thinking that can our chai object posses descriptor properties?

//console.log(Object.getOwnPropertyDescriptor(chai));// it will give undefined because we need to property
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// now we are defining our own property on object ,here if we make enumerable false then we can not iterate on object
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {// we need to give object.entries() ,because we are iterating on inner properties of object
    if (typeof value !== 'function') {// function can be checked like this  also here
        
        console.log(`${key} : ${value}`);
    }
}