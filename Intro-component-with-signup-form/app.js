const inputs = Array.from(document.getElementsByTagName('input'));
const form = document.querySelector('.submit-form');

let inputsState = [false, false, false, false];

inputs.forEach((element, index) => {
    element.addEventListener('blur', (event) => {
        if(event.target.id === "email") {
            if(validateEmail(event.target.value)) {
                removeError(event.target);
                event.target.nextElementSibling.nextElementSibling.textContent = "";
                inputsState[index] = true;
            }
            else {
                setError(event.target);
                event.target.nextElementSibling.nextElementSibling.textContent = "Looks like this is not an email";
                inputsState[index] = false;
            }
        }
        else {

            if(event.target.value) {
                removeError(event.target);
                event.target.nextElementSibling.nextElementSibling.textContent = "";
                inputsState[index] = true;
            }
            else {
                setError(event.target);
                event.target.nextElementSibling.nextElementSibling.textContent = `${event.target.placeholder} cannot be empty`;
                inputsState[index] = false;
            }
        }
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(inputsState[0] && inputsState[1] && inputsState[2] && inputsState[3]) {
        event.target.submit();
    }
    else {
        return;
    }
})


function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return regex.test(email);
}

function setError(input) {
    input.classList.add('submit-form__input--error');
    input.nextElementSibling.classList.add('submit-form__error-icon--active');
}

function removeError(input) {
    input.classList.remove('submit-form__input--error');
    input.nextElementSibling.classList.remove('submit-form__error-icon--active');
}