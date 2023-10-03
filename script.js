
// Get references to form elements
const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById("pwd-confirm");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');
const submit = document.querySelector('input[type="submit"]');

// Function to check if the entered password matches the confirmation password
const checkPasswordMatch = function() {
    // Remove error class when a password is entered and it matches the confirmation
    if (pwd.value === pwdConfirm.value && pwd.classList.contains("error")) {
        pwd.classList.remove('error');
        pwdConfirm.classList.remove('error');
        submit.disabled = false;
    }
    // Reinstate error class if pwd is empty or does not match confirmation
    if ( (pwd.value !== pwdConfirm.value || pwd.value === '') && 
            !pwd.classList.contains("error")) {
        pwd.classList.add('error');
        pwdConfirm.classList.add('error');
        submit.disabled = true;
    }
}

// Event listener: Check password validity and match status on input change
pwd.addEventListener('input', function() {
    this.checkValidity();
    checkPasswordMatch();
});
pwdConfirm.addEventListener('input', checkPasswordMatch);

// Event listener: Check validity of first name on input change
fname.addEventListener('input', function () {
    this.checkValidity();
});

// Event listener: Check validity of last name on input change
lname.addEventListener('input', function () {
    this.checkValidity();
});

// Event listener: Check validity of phone number on input change
phone.addEventListener('input', function () {
    this.checkValidity();
});
