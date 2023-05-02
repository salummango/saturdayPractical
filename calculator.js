// Get input fields and result field
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

// Get arithmetic operation buttons
const addBtn = document.querySelector('#add');
const subBtn = document.getElementById('subtract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');
const modBtn = document.getElementById('modulus');

// Add event listeners to buttons
addBtn.addEventListener('click', () => {
    const sum = Number(num1.value) + Number(num2.value);
    result.value = sum;
});

subBtn.addEventListener('click', () => {
    const difference = Number(num1.value) - Number(num2.value);
    result.value = difference;
});

mulBtn.addEventListener('click', () => {
    const product = Number(num1.value) * Number(num2.value);
    result.value = product;
});

divBtn.addEventListener('click', () => {
    const quotient = Number(num1.value) / Number(num2.value);
    result.value = quotient;
});

modBtn.addEventListener('click', () => {
    const modulus = Number(num1.value) % Number(num2.value);
    result.value = modulus;
});


// document.addEventListener("DOMContentLoaded", function() {
//     let num1 = document.querySelector("#num1");
//     let num2 = document.querySelector("#num2");
//     let result = document.querySelector("#result")

//     document.querySelector('button').onclick = function() {
//         if (button === "add") {
//             result.value = Number(num1.value) + Number(num2.value);
//             console.log("nhj")
//         }

//     };

// });