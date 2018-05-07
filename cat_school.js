// not in workshop

'use strict'

//import the cat module
let cats = require('./cat');
let Cat = cats.Cat;

//create some cats
let cat1 = new Cat('Mam');
let cat2 = new Cat('Pate');

cat1.age = 2;
cat2.age = 2;

// let's find out the names and ages of cats in the class

console.log('There are two cats in the class ' + cat1.name + ' and ' + cat2.name + '.');
console.log(cat1.name + ' is ' + cat1.age + ' and ' + cat2.name + 'is ' + cat2.age + ' years old.');


