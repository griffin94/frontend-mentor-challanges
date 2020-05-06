const emailInput = document.getElementById('email');
const form = document.querySelector('.subscribe-form');
const errorLabel = document.querySelector('.subscribe-form__input-label');

emailInput.addEventListener('blur', () => {
    checkEmail(emailInput.value);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(checkEmail(emailInput.value)) {
        form.submit();
    }
})

function checkEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(regex.test(email)) {
        removeError();
        return true;
    }
    else {
        setError();
        return false;
    }
}

function setError() {
    emailInput.classList.add('subscribe-form__email-input--error');
    errorLabel.textContent = "Please prive a valid email address";
}

function removeError() {
    emailInput.classList.remove('subscribe-form__email-input--error');
    errorLabel.textContent = "";
}