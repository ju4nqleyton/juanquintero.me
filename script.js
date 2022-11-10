'use strict';

const luckyNumber = (a, b) => Math.floor(Math.random() * (b - a) + a);
console.log(`Your lucky numbers is: ${luckyNumber(0, 10000)}.`);
