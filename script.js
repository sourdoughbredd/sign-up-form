const pwd = document.getElementById('pwd');
const pwdConfirm = document.getElementById("pwd-confirm");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const phone = document.getElementById('phone');
const submit = document.querySelector('input[type="submit"]');

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

// Toggle error class when passwords match/mismatch
pwd.addEventListener('change', function() { 
    this.checkValidity();
    checkPasswordMatch();
});
pwdConfirm.addEventListener('change', checkPasswordMatch);

fname.addEventListener('change', function () {
    this.checkValidity();
});

lname.addEventListener('change', function () {
    this.checkValidity();
});

phone.addEventListener('change', function () {
    this.checkValidity();
});
