// Get form elements
const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Get error divs
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Regular expression for valid email
const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// Validation function
function validateForm() {
    let valid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate full name
    if (username.value.trim() === '') {
        nameError.textContent = 'Full name is required.';
        valid = false;
    }

    // Validate email
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        valid = false;
    }

    // Validate password
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        valid = false;
    }

    // Validate confirm password
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }

    return valid;
}

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        alert('Registration successful!');
        form.reset(); // Clear form inputs
    }
});