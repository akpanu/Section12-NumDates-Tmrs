'use strict';

console.log(+`45`);
console.log(+`4.5`);
console.log(Number.parseInt(`56naira`));
console.log(Number.parseInt(`4.5gees`));
console.log(Number.parseFloat(`6.7ups`));

// BigInt
console.log(BigInt(`13297327389789375893787389`));

// Javascript Date and Times
const future = new Date();
console.log(future.now());
