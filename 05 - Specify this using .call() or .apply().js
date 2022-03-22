// call(context) & apply(context): invoke function in context ( this= context )
const numbers = [10, 20, 30, 40, 50];

const slice1 = numbers.slice(1, 4);
const slice2 = numbers.slice.call(numbers, 1, 4);
const slice3 = numbers.slice.apply(numbers, [1, 4])

console.log(slice1);
console.log(slice2);
console.log(slice3);
//if you set the this arg to null or undefined, the JavaScript engine will ignore that value and use the global object instead. In strict mode, that doesn't happen.
