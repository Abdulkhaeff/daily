

var array =[123,32324,'Jamshidbek']
array.push(12,3123)
console.log(array);
array.unshift(12,'jamshidbek')
array.pop()
array.pop()
array.shift()
console.log(array);

array.splice(1,2)



var ar=[1,5,12,7,2,3,4,4,5,]
ar.sort((a,b)=>a-b)
console.log(ar);


console.log(array);
fruits.sort((a,b)=>a.localeCompare(b))
console.log(fruits);




var fruits=[1,2,3,3,4,11,23,4,4,5,5,5,6]
console.log(fruits.filter((value)=>value<10));

var fruits=[12,2,3,3,4,11,23,4,4,5,5,5,6]

fruits.map((value,index)=>value-index)
console.log(fruits.map((value,index)=>value+index));

console.log(fruits.fill(2,3,6))

arr=[12,32,3]

console.log(Array.from(arr,(j)=>j*j));





