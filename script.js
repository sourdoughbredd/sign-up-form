const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector("#pwd-confirm");

const checkPasswordMatch = function() {
    // Remove error class when a password is entered and it matches the confirmation
    if (pwd.value === pwdConfirm.value && pwd.classList.contains("error")) {
        pwd.classList.remove('error');
        pwdConfirm.classList.remove('error');
    }
    // Reinstate error class if pwd is empty or does not match confirmation
    if ( (pwd.value !== pwdConfirm.value || pwd.value === '') && 
            !pwd.classList.contains("error")) {
        pwd.classList.add('error');
        pwdConfirm.classList.add('error');
    }
}

// Toggle error class when passwords match/mismatch
pwd.addEventListener("change", checkPasswordMatch);
pwdConfirm.addEventListener("change", checkPasswordMatch);
