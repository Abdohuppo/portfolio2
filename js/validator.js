const nameE1 = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const messageE1 = document.querySelector('#message');
const form = document.querySelector('#form');


form.addEventListener('submit', function (e) {

    e.preventDefault();


    let isUsernameValid = checkUsername();
    let isEmailValid = checkEmail();
    let ismessagevali = checkMessage();
      

    let isFormValid = isUsernameValid && isEmailValid && ismessagevali;


    if (isFormValid) {
    }
});
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const showError = (input, message) => {

    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');


    const error = formField.querySelector('small');
    error.textContent = message;
};
const showSuccess = (input) => {

    const formField = input.parentElement;


    formField.classList.remove('error');
    formField.classList.add('success');


    const error = formField.querySelector('small');
    error.textContent = '';
}
const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = nameE1.value.trim();

    if (!isRequired(username)) {
        showError(nameE1, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(nameE1, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(nameE1);
        valid = true;
    }
    return valid;
}
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}
const checkMessage = () => {

    let valid = false;
    const min = 2,
        max = 250;
    const message = messageE1.value.trim();

    if (!isRequired(message)) {
        showError(messageE1, 'Message cannot be Empty.');
    } else {
        showSuccess(messageE1);
        valid = true;
    }
    return valid;
}