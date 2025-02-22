document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signinForm = document.getElementById('signin-form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (!validateEmail(email)) {
                showAlert('Invalid email format');
                return;
            }

            if (!validatePassword(password)) {
                showAlert('Password must be at least 8 characters long and include a number, a special character, and an uppercase letter');
                return;
            }

            if (password !== confirmPassword) {
                showAlert('Passwords do not match');
                return;
            }

            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'signin.html';
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === email && storedUser.password === password) {
                window.location.href = 'home-page.html'; // Ensure 'home-page.html' exists and is the correct home page
            } else {
                showAlert('Invalid email or password');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        // Updated regex to enforce strong password requirements
        const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return re.test(password);
    }

    function togglePasswordVisibility(id) {
        const passwordField = document.getElementById(id);
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
        } else {
            passwordField.type = 'password';
        }
    }

    function showAlert(message) {
        alert(message);
    }

    window.togglePasswordVisibility = togglePasswordVisibility;
});