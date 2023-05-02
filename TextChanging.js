const textArray = [
    "name:My name is Salum Maembe",
    "From State University of Zanzibar",
    "my Reg.No BITAM/9/21/052/TZ",

];

let index = 0;
const changingText = document.querySelector("#changing-text");

setInterval(() => {
    index = (index + 1) % textArray.length;
    changingText.innerHTML = `
    <h2>${textArray[index]}</h2>
    <p>Check out my amazing content above.</p>`;
}, 3000);

// const textArray = [
//     "name:My name is Salum Maembe",
//     "From State University of Zanzibar",
//     "my Reg.No BITAM/9/21/052/TZ",
// ];

// const changingText = document.querySelector("#changing-text");
// changingText.innerHTML = `
//     <h2>${textArray.join('<br>')}</h2>
//     <p>Check out my amazing content above.</p>
// `;