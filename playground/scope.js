/* eslint-disable */

// const age = 100;

// function go() {
//     const hair = 'blonde';
//     const myAge = 200;
//     console.log(age);
//     console.log(myAge);
//     console.log(hair);
// }

// go();


// function isCool(name) {
//     let cool;
//     if(name === 'adam') {
//         cool = true;
//     }

//     console.log(cool);
//     return cool;
// }

// isCool('adam');



const dog = 'sadie';

function logDog(dog) {
    console.log(dog);
}

function goDog() {
    const dog = 'sunny';
    logDog(dog);
}

goDog();


function sayHi(name) {
    function yell() {
        console.log(name.toUpperCase());
    }
    yell();
}

// Not defined
// yell();

sayHi('name');