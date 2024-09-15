var email = document.querySelector('#email')
var username = document.querySelector('#username')
var password = document.querySelector('#password')
var confirmPassword = document.querySelector('#confirmPassword')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyInvalid(listInput) {
    let isEmptyInvalid = false
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmptyInvalid = true
            showError(input, "Information must not be empty!")
        } else {
            showSuccess(input)
        }
    });

    return isEmptyInvalid
}

function checkEmailInvalid(input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isEmailInvalid = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, "Invalid Email!")
    }

    return isEmailInvalid
}

function checkLengthInvalid(input, min, max, field) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, `${field} must not have less than ${min} characters!`)
        return true;
    }
    if (input.value.length > max) {
        showError(input, `${field} must not have more than ${max} characters!`)
        return true
    }
    showSuccess(input)
    return false
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        console.log("Password does not match!")
        showError(cfPasswordInput, "Password does not match!")
        return true
    }
    return false
}

form.addEventListener('submit', function(e) {
    e.preventDefault()
    let isEmptyInvalid = checkEmptyInvalid([email, username, password, confirmPassword])
    let isEmailInvalid = checkEmailInvalid(email)
    let usernameLengthInvalid = checkLengthInvalid(username, 4, 16, "Username")
    let passwordLengthInvalid = checkLengthInvalid(password, 4, 16, "Password")
    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyInvalid || isEmailInvalid || usernameLengthInvalid || passwordLengthInvalid || isMatchError) {

    } else {
        
    }
})