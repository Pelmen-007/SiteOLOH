const email = document.getElementById('email');
const password = document.getElementById('password');
const password_repeat = document.getElementById('password_repeat');
const button = document.getElementById('btn');
var akks = []

function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePasswordRepeat(password, repeat) {
    return password === repeat;
}
function addAkk(email, password) {
    const newAkk = {
        email: email,
        password: password
    }
    akks.push(newAkk)
    localStorage.setItem('akks', JSON.stringify(akks));
    console.log(akks)
}

email.addEventListener('input', () => {
    const result = validateEmail(email.value);
    if (result == 1) {
        email == "Hello"
    }
});

password.addEventListener('input', () => {
    const result = validatePassword(password.value);
    if (result == 1) {
    }
});

password_repeat.addEventListener('input', () => {
    const result = validatePasswordRepeat(password.value, password_repeat.value);
    if (result == 1) {
    }
});

button.addEventListener('click', () => {
    if (validateEmail(email.value) && validatePassword(password.value) && validatePasswordRepeat(password.value, password_repeat.value)) {
        addAkk(email, password)
        console.log("Всё Гуд")
    } else {
        console.log("Всё Не Гуд")
    }
});