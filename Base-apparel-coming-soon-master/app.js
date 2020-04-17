const form = document.querySelector('.main-section__form');
const emailInput = form.querySelector('.main-section__input');
let isEmailValid = false;


emailInput.addEventListener('blur', () => {
    const email = emailInput.value;
    const errorLabel = form.querySelector('.main-section__error-label');
    const errorIcon = form.querySelector('.main-section__error-icon');
    if(validateEmail(email)){
        errorLabel.textContent = "";
        errorIcon.classList.remove('main-section__error-icon--active');
        isEmailValid = true;
    }
    else {
        errorLabel.textContent = "Please provide a valid email";
        errorIcon.classList.add('main-section__error-icon--active');
    }
})

form.addEventListener('submit', event => {
    event.preventDefault();
    if(isEmailValid) {
        form.submit();
    }
})

function validateEmail(text) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(text);
}