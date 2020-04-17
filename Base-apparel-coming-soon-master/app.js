const form = document.querySelector('.main-section__form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = form.querySelector('.main-section__input').value;
    const errorLabel = form.querySelector('.main-section__error-label');
    const errorIcon = form.querySelector('.main-section__error-icon');
    if(validateEmail(email)){
        errorLabel.textContent = "";
        errorIcon.classList.remove('main-section__error-icon--active');
    }
    else {
        errorLabel.textContent = "Please provide a valid email";
        errorIcon.classList.add('main-section__error-icon--active');
    }
})

function validateEmail(text) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(text);
}