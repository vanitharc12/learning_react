
// creating objects using spread operator
const obj1={ name:"test"}

const obj2={...obj1,age: 20}
console.log(obj1,obj2)

// creating arrays using spread operator

const arr1=[1,2,3]
const arr2=[arr1,4,5]
console.log(arr1,arr2);



  const display=(...args)=>
{
     return args.filter(e=>1===e)
}
console.log(display(1,2,3));
