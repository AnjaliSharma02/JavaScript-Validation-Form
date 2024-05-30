function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var fullNameError = document.getElementById("fullNameError");
    var emailError = document.getElementById("emailError");
    var phoneNumberError = document.getElementById("phoneNumberError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    fullNameError.textContent = "";
    emailError.textContent = "";
    phoneNumberError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (fullName.length < 5) {
        fullNameError.textContent = "Name must be at least 5 characters long";
        return false;
    }

    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email address";
        return false;
    }

    if (phoneNumber.length !== 10 || phoneNumber === "123456789") {
        phoneNumberError.textContent = "Enter a valid 10-digit phone number";
        return false;
    }

    if (password === "password" || password.length < 8 || password === fullName) {
        passwordError.textContent = "Password is not strong";
        return false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        return false;
    }

    return true;
}




