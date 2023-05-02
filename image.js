// Select the image and button elements from the HTML
const image = document.querySelector('#my-image');
const button = document.querySelector('#my-button');

// Add an event listener to the button for the click event
button.addEventListener('click', () => {
    // Move the image to the right by 100 pixels
    image.style.left = parseInt(image.style.left) + 100 + "px";
});

// Add an event listener to the image for the mouseover event
image.addEventListener('mouseover', () => {
    // Increase the image width by 50 pixels
    image.style.width = parseInt(image.style.width) + 50 + "px";
});

// Add an event listener to the image for the mouseout event
image.addEventListener('mouseout', () => {
    // Decrease the image width by 50 pixels
    image.style.width = parseInt(image.style.width) - 50 + "px";
});