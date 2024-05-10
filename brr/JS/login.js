document.getElementById("form").addEventListener("submit", function(event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorDiv = document.getElementById("error");
    
    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    // Validate Password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,15}$/;
    if (!password.match(passwordRegex)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and be 6-15 characters long.");
        event.preventDefault();
        return;
    }
});