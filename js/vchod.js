const email = document.getElementById('email');
const password = document.getElementById('password');
const button = document.getElementById('btn');

function validateEmail(email) {
    return true;
}

function validatePassword(password) {
    return true;
}

button.addEventListener('click', () => {
    window.location.href = 'general_general.html'
    console.log("1")
});