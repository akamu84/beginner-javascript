/* eslint-disable */

// Anonymous function
// function(firstName) {
//   return `Dr. ${firstName}`;
// };

// Function declaration
// Can be used before defined
function doctorizeDec(firstName) {
  return `Dr. ${firstName}`;
}

// Function expression
// Can only be used after defined
const doctorizeExp = function(firstName) {
  return `Dr. ${firstName}`;
};

// IIFE (immediately invoked function expression) Function
(function(age) {
    return `You are cool and age ${age}`;
})(10);

// Arrow function
// Can only be anonymous function expression
// Functions with one parameter don't require parenthesis
const doctorizeArrowExplicitReturn = (inches) => { 
    return inches * 2.54;
};

const doctorizeArrowImplicitReturn = inches => inches * 2.54;

const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     };
//     return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// Methods
// Functions attached to an object
const person = {
    name: 'Adam',
    sayHi: function() {
        return 'Hey Adam';
    }
}

// Shorthand Method
const person2 = {
    name: 'Adam',
    sayHi() {
        return 'Hey Adam';
    }
}

// Arrow function method
const person3 = {
    name: 'Adam',
    sayHi: () => 'Hey Adam'
}

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');
button.addEventListener('click', person.sayHi);

function handleClick() {
    console.log('Good click!');
}
button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
    console.log('You clicked it!');
});

//Timer callback
setTimeout(person.sayHi, 1000);

setTimeout(function() {
    console.log('Time to eat!');
}, 1000);