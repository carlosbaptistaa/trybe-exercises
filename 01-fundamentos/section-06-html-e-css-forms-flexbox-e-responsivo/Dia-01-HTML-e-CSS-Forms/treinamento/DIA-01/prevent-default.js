const input_text = document.querySelector("#input-text");
const input_checkbox = document.querySelector("#input-checkbox");
const href_link = document.querySelector("#href");

href_link.addEventListener('click' , (event) => {
    event.preventDefault();
});

input_checkbox.addEventListener('click' , (event) => {
    event.preventDefault();
});

input_text.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
        event.preventDefault();
    }
});