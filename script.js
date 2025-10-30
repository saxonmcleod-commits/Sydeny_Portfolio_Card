// 1. Get references to the HTML elements we need
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// 2. Add an event listener to the button
toggleButton.addEventListener('click', () => {

    // The core of the toggle! Add or remove the 'light-mode' class on the body
    body.classList.toggle('light-mode'); 

    // 3. Change the button text based on the current state
    if (body.classList.contains('light-mode')) {
        toggleButton.textContent = 'Switch to Dark Mode';
    } else {
        toggleButton.textContent = 'Switch to Light Mode';
    }
});